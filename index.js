const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let  pintoresRouter = require('./routes/pintor');

/////////////

const app =  express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
//conectate 

app.use('/', pintoresRouter);

//conectate weon al Mongo//

mongoose.Promise = global.Promise;

const cadena= 'mongodb+srv://chale:1234567890@martinezjuan-g-bnfiy.mongodb.net/makoso?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('coneccion exsitosa :3');
}).catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log('escuchandote...');
});