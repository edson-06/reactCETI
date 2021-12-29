const express = require('express');
const router = express.Router();

const Material = require('../model/material');

router.get("/", (req, resp) => {
    resp.send("Hola ...");
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//METODO DE CREAR
router.post('/addMaterial', async(req, res) => {
    //DESDE EL FORMULARIO DE REACT NOS MANDA LA INFORMACION
    const material = new Material(req.body)
    await material.save()
    res.send(material)
})
//Metodo mostrar materiales
router.get('/getMaterial', async(req, res)=>{
    const material = await Material.find();
    res.send(material);
    console.log("consultar")
})
//Obtener un material
router.get('/getMaterial/:id', async(req, res)=>{
    const{id} = req.params;
    const material = await Material.findById(id);
    res.send(material);
})
//Eliminar un material
router.delete('/deleteMaterial/:id', async(req, res)=>{
    var id = req.params.id;
    const material = await Material.findByIdAndDelete(id);
    res.send(material);
})
//Actualizar un material
router.put('/updateMaterial/:id', async(req, res)=>{ 
    const materialU = await Material.findByIdAndUpdate(req.params.id, req.body)
    .then(material => res.json({ msg: 'Actualizado' }))
    .catch(err =>
    res.status(400).json({ error: 'Inabilidatdo' })
    );
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//METODO DE CREAR Sala
router.post('/addSala', async(req, res) => {
    //DESDE EL FORMULARIO DE REACT NOS MANDA LA INFORMACION
    const Sala = new Sala(req.body)
    await sala.save()
    res.send(sala)
})
//Metodo mostrar malaes
router.get('/getSala', async(req, res)=>{
    const sala = await Sala.find();
    res.send(sala);
    console.log("consultar")
})
//Obtener un sala
router.get('/getSala/:id', async(req, res)=>{
    const{id} = req.params;
    const sala = await Sala.findById(id);
    res.send(sala);
})
//Eliminar un sala
router.delete('/deleteSala/:id', async(req, res)=>{
    var id = req.params.id;
    const sala = await Sala.findByIdAndDelete(id);
    res.send(sala);
})
//Actualizar un sala
router.put('/updateSala/:id', async(req, res)=>{
    const SalaU = await Sala.findByIdAndUpdate(req.params.id, req.body)
    .then(sala => res.json({ msg: 'Actualizado' }))
    .catch(err =>
    res.status(400).json({ error: 'Inabilidatdo' })
    );
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;