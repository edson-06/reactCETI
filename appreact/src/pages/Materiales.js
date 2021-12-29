import {useEffect, useState} from 'react';
import FormularioMaterial from '../componentes/formulario/FormularioMaterial';
import MostrarMaterial from './consultasBD/MostrarMaterial';
//Funciones
function Materiales() {
    //variable//funcion
    const [material, set_Material] = useState([]) 
    useEffect(() => {
        fetch("/getMaterial")
            .then((res) => res.json(), e =>{
                console.log("Error:-------", e)
            })
            .then((material) => {
                console.log("Mostrando datos...")
                set_Material(material)
            })
    },[])
    console.log(material)
    return(
        <div className='cajaMateriales'>
            <h1>Materiales</h1>
            <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Añadir
                </button>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <FormularioMaterial band={null}/>
                </div>
            </div>
            <MostrarMaterial material={material}/>
        </div>
    ) 
}
export default Materiales;