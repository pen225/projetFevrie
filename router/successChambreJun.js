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
    res.render('../views/successChambreJun')
    
});

module.exports = router;