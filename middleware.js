const express = require('express');
const bodyParser = require('body-parser');
const auth = require('http-auth');

let app = express();
app.use(express.static('public'));


let basic = auth.basic({
    realm: "Secret Simplon.",
    file: __dirname + "/.htpasswd"
});

app.use("/private", auth.connect(basic));
// ça enregistre un handler, on associe une function a url
app.post("/auth",
    // premiere function a être appellée
    bodyParser.urlencoded({ extended: true }),
    // second function 
    function(request, response) {
        console.log(request.body);
        response.send('Succes!')
    }
);

app.listen(8080, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("server listening on 8080");
});