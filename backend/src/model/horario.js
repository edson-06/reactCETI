const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horarioSchema = new Schema({
    idHorario: Number,
    nombreHorario: String,
    descripcionHorario:String,
    estadoHorario: Boolean
});

module.exports = mongoose.model('horario', horarioSchema);