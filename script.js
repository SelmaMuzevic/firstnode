const fs = require('fs');
fs.writeFile('toto.txt', 'Hello Toto !', function(err) {
    if (err) {
        console.error(err);
    }
    console.log('The file has been saved!');
});

fs.readdir('.', function(err, files) {
    if (err) {
        console.error(err);
        rreturn;
    }
    console.log(files);
});