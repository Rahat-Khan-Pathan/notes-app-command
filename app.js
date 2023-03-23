const yargs = require("yargs");
const notes = require("./note.js");
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

yargs.command({
    command: "view",
    description: "View all notes",
    handler: function () {
        notes.viewNotes();
    },
});

yargs.parse();
