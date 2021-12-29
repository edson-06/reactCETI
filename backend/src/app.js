const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser')

const app = express();

//
mongoose.connect('mongodb://172.17.0.2/bdCETI')
    .then(
        db => console.log('conectado...')
    ).catch(
        err => console.log(err)
    )

    app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//importación
app.use('/', indexRouter);
////


/**
    app.get("/", (req, resp) => {
    resp.send("Hola munnnndo...");
})
 */

app.listen(3008, function(){
    console.log("Escuchando en el puerto 3008");
})