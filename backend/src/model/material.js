const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    idMaterial: Number,
    nombreMaterial: String,
    descripcionMaterial:String,
    estadoMaterial: Boolean,
    cantidadMaterial: Number
});

module.exports = mongoose.model('material', materialSchema);