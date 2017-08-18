//import fs from 'fs'; mm chose que let fs en-dessous on rend le contenu accessible à l'interieur de notre fichier
/*
Node.js fait du Javascript dit modulaire. Cela signifie
qu'un fichier javascript ne connait que ce qu'il a été
déclaré à l'intérieur, il ne connait aucune des library
installées ou des modules de Node.js par défaut, ni même
les autres fichiers js d'un même projet.
Pour pouvoir utiliser les autres fichiers/library/module,
il faut utiliser la fonction require() avec comme argument
le nom du module à importer.
Ici, on fait un require du module fs qui se charge de la
gestion des fichiers et dossiers.
*/
//let fs = require('fs');
/*
Pour utiliser des fonctions/classes/variables d'un autre
fichier js de notre projet, il faut également le require mais
en précédant le nom du fichier par ./
Sans le ./, il ira chercher dans les node_modules un projet
de ce nom là.
*/
//let hello = require('./deuxieme');
//hello();

/*fs.readFile('/home/marlene/dev/chat/README.md', 'utf-8', function(error, data) {
    console.log(data);
});*/

//console.log('bloup');
//console.log(fs);

const doggo = require('./database.js');
const http = require('http');

const server = http.createServer(function(req, res) {
    doggo.getAllDoggos(function(chiens) {
        res.end(JSON.stringify(chiens));
    });
});
serveur.listen(8181, function() {
    console.log('server listening on port 8181');
});
//console.log(doggo);