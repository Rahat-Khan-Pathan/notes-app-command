const fs = require("fs");
// function to get all notes in the data.json file
const getNotes = function () {
    try {
        dataBuffer = fs.readFileSync("./data.json");
        jsonData = dataBuffer.toString();
        data = JSON.parse(jsonData);
        return data;
    } catch (e) {
        return [];
    }
};
// function to add a new note
const addNote = function (title, body) {
    data = getNotes();
    const duplicate = data.filter(function (note) {
        return note.title === title;
    });
    if (duplicate.length > 0) {
        console.log("Duplicate title");
        return;
    }
    data.push({
        title: title,
        body: body,
        createdDate: new Date().toLocaleString(),
    });
    updateData(data);
    console.log("Note added");
};
// function to update a note, title is required
const updateNote = function (title, body) {
    data = getNotes();
    const found = data.filter(function (note) {
        return note.title === title;
    });
    if (found.length === 0) {
        console.log("Note not found");
    } else {
        data[data.indexOf(found[0])] = {
            title: title,
            body: body,
            updatedDate: new Date().toLocaleString(),
        };
        updateData(data);
        console.log("Note updated");
    }
};
// function to remove a note, title is required
const removeNote = function (title) {
    data = getNotes();
    const found = data.filter(function (note) {
        return note.title === title;
    });
    if (found.length === 0) {
        console.log("Note not found");
    } else {
        data.splice(data.indexOf(found[0]), 1);
        updateData(data);
        console.log("Note removed");
    }
};
// function to view all note title, body and date
const viewNotes = function () {
    data = getNotes();
    let i = 1;
    data.forEach((e) => {
        console.log(
            `Note - ${i++}\nTitle-${e.title}\nBody-${e.body}\nDate-${
                e?.createdDate || e?.updatedDate
            }\n`
        );
    });
};
// function to update data in the data.json
const updateData = function (data) {
    fs.writeFileSync("./data.json", JSON.stringify(data));
};
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    viewNotes: viewNotes,
    updateNote: updateNote,
};
