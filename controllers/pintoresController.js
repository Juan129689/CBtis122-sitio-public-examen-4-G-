let mongoose = require('mongoose');
//enlazar//
let pintores = require('../models/pintores')

let pintoresController = {};

/*listar-> find*/

pintoresController.list = (require,res)=>{
    pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err, pintor)=>{
        if(err){
            console.log('error:' , err)
        }
        res.render('../views/index',{
            pintores:pintor,
            titulo:"listado de pintores",
            year: new Date().getDate()
        })
    })
};
module.exports = pintoresController;