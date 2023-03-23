const fs = require("fs");
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
const addNote = function (title, body) {
    data = getNotes();
    const duplicate = data.filter(function (note) {
        return note.title === title;
    });
    if (duplicate.length > 0) {
        console.log("Duplicate title");
        return;
    }
    data.push({ title: title, body: body });
    updateData(data);
    console.log("Note added");
};
const updateNote = function (title, body) {
    data = getNotes();
    const found = data.filter(function (note) {
        return note.title === title;
    });
    if (found.length === 0) {
        console.log("Note not found");
    } else {
        data[data.indexOf(found[0])] = { title: title, body: body };
        updateData(data);
        console.log("Note updated");
    }
};
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
const viewNotes = function () {
    data = getNotes();
    let i = 1;
    data.forEach((e) => {
        console.log(`Note - ${i++}\nTitle-${e.title}\nBody-${e.body}\n`);
    });
};
const updateData = function (data) {
    fs.writeFileSync("./data.json", JSON.stringify(data));
};
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    viewNotes: viewNotes,
    updateNote: updateNote,
};
