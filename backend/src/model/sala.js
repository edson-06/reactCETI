const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaSchema = new Schema({
    idSala: Number,
    nombreSala: String,
    descripcionSala:String,
    estadoSala: Boolean,
    cantidadSillasSala: Number,
    cantidadEquiposSala: Number
});

module.exports = mongoose.model('sala', salaSchema);