const express = require('express');
const bd = require('../requetedb');
let router = express.Router();
const bodyParser = require('body-parser');
const parserUrlencoded = bodyParser.urlencoded({ extended:false });



router.get('/', parserUrlencoded,(req, res) =>{
    // mysqlConnexion.query(`select * from clients`,(err, result, fields) =>{
    //     if (!err) {
    //         res.render('../views/admin',{data:result});
            
    //     }else{
    //         return console.log('erreur', err);
    //     }
    // });
    res.render('../views/formReservation')
    
});


router.post('/', parserUrlencoded,(req, res) =>{
    // let ddd = userquery.insertDonnees(req.body);
    res.redirect('/formReservation');
    console.log(req.body);
    let sql = "insert into infoclients (nom,prenom,email,phone) values (?,?,?,?)";
    bd.query(sql, [req.body.nom, req.body.prenom, req.body.email, req.body.phone], (err, res) =>{
        if (err) {
            console.log(err);
            return {erreur:err}
        }else{
            console.log("success");
            // return {success:success}
        }
    });

});

module.exports = router;