const mysql = require('mysql'); // ac const on ne peut pas changer la valeur
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'simplon',
    database: 'first_db'
});
/**
 * Fonction permettant de récupérer les chiens dans la
 * base de données en utilisant le package mysql.
 * @param {*} callback fonction de callback contenant les 
 * chiens de la bdd
 */
function getAllDoggos(callback) {
    connection.connect();
    connection.query('SELECT * FROM  small_doggo', function(err, result) {
        if (err) {
            throw err;
        }
        //console.log(result);
        //La fonction map sur les Array itérera sur chaque
        //item de l'array et remplacera (dans un nouvel array)
        //la valeur de celui ci par la valeur return par la
        //fonction dans le map
        let retour = results.map(function(valeur) {
            return {
                id: valeur.id,
                name: valeur.name,
                birthdate: valeur.birthdate,
                race: valeur.race,
                isGood: valeur.is_good
            };
        });
        callback(retour);
        callback(retour);
    });
    connection.end(); // ou cnx.end();
}
//Pour rendre des données accessible depuis l'extérieur de
//notre module lors d'un require de celui ci, il va falloir
//manuellement "exporter" les données en question avec
//l'objet module et sa propriété exports.
//module.exports est un objet qui représentera les informations
//rendues accessible lorsqu'on fera un require de ce module.
// module.exports.getAllDoggos = getAllDoggos;



module.exports = {
    getAllDoggos: getAllDoggos
}