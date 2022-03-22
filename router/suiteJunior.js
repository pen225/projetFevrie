const express = require('express');
const bd = require('../requetedb');
let router = express.Router();
const bodyParser = require('body-parser');
const parserUrlencoded = bodyParser.urlencoded({ extended:false });







bd.connect((err) =>{
    if (!err) {
        console.log('Connexion reussie');

        router.get('/', parserUrlencoded,(req, res) =>{
            // mysqlConnexion.query(`select * from clients`,(err, result, fields) =>{
            //     if (!err) {
            //         res.render('../views/admin',{data:result});
                    
            //     }else{
            //         return console.log('erreur', err);
            //     }
            // });
            res.render('../views/suiteJunior');
            // console.log(req.body);
        });
        
        router.post('/', parserUrlencoded,(req, res) =>{
            // let ddd = userquery.insertDonnees(req.body);
            res.redirect('formReservation');
            console.log(req.body);
            let sql = "insert into infochambre (arrivee,depart,prixTotal) values (?,?,?)";
            bd.query(sql, [req.body.arrivee, req.body.depart, req.body.prixTotal], (err, res) =>{
                if (err) {
                    console.log(err);
                    return {erreur:err}
                }else{
                    console.log("success");
                    // return {success:success}
                }
            });

        });
        
    }else{
        console.log('Echec de connexion',err);
    }
});

module.exports = router;