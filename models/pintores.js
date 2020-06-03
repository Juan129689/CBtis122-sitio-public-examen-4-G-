 const mongoose = require('mongoose');
 //Schema//
 let Schema = mongoose.Schema;

let pintoresSchema = new Schema({
    nombre:{type: String,
    required:[true, 'requerimos el neim']},

    corriente:{type: String,
    required:[true, 'requerimos la corriente']},

    pais:{type: String},

    pintura:{type: String}

});
module.exports = mongoose.model('pintores', pintoresSchema);