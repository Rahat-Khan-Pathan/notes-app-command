const yargs = require("yargs");
const notes = require("./note.js");
// ADD command
yargs.command({
    command: "add",
    description: "Add a note",
    builder: {
        title: {
            description: "Give title",
            demandOption: true,
            type: "string",
        },
        body: {
            description: "Give body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    },
});
// REMOVE command
yargs.command({
    command: "remove",
    description: "Remove a note",
    builder: {
        title: {
            description: "Give title",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    },
});
// UPDATE command
yargs.command({
    command: "update",
    description: "Update a note",
    builder: {
        title: {
            description: "Give title",
            demandOption: true,
            type: "string",
        },
        body: {
            description: "Give body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        notes.updateNote(argv.title, argv.body);
    },
});
// VIEW command
yargs.command({
    command: "view",
    description: "View all notes",
    handler: function () {
        notes.viewNotes();
    },
});

yargs.parse();
