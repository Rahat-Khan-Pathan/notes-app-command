# Note App using Command Line 

## How to run this project
1. Run the following command to install the packages listed in the dependencies section of the package.json file:
``` 
$ npm install 
```

2. Run the following command to add a note.
```
$ node app.js add --title="Your title" --body="Your body"
```

3. Run the following command to remove a note.
```
$ node app.js remove --title="Your title"
```

4. Run the following command to update a note.
```
$ node app.js update --title="Note title" --body="Your new body"
```

5. Run the following command to view all notes.
```
$ node app.js view
```

6. Run to view all commands.
```
$ node app.js --help
```