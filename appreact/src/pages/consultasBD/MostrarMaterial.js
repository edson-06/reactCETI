import { useEffect, useState } from "react"
import FormularioMaterial from "../../componentes/formulario/FormularioMaterial";

export default function MostrarMaterial({ material, coll }) {
    const [value, setValue] = useState()
    useEffect(() => {
        if (value) {
            fetch(`/deleteMaterial/${value}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        }
    })

    const [valueEditar, setValueEdit] = useState({
        idMaterial: 0,
        nombreMaterial: "",
        descripcionMaterial: "",
        estadoMaterial: false,
        cantidadMaterial: 0,
        valueEditar: []
    })

    function eliminar_Material(id) {
        const userResponse = window.confirm("Estas seguro de eliminar el material?")
        console.log("eliminar")
        if (userResponse) {
            //se añade el evento para eliminar
            setValue(id)
            refresh_Page()
        }

    }
    function refresh_Page(event) {
        console.log('recargando...');
        window.location.reload();
    }

    return (
        <div>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        material.map((valor, cont) => (
                            <tr key={cont}>
                                <th scope="row">{valor.idMaterial}</th>
                                <td>{valor.nombreMaterial}</td>
                                <td>{valor.descripcionMaterial}</td>
                                <td>{valor.estadoMaterial}</td>
                                <td>{valor.cantidadMaterial}</td>
                                <td >
                                    <button type="button" className="btn btn-warning" onClick={() => setValueEdit(valor)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={(e) => eliminar_Material(valor._id)}>Eliminar </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Materiales</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {console.log("tipo de variable: ", typeof (valueEditar))}
                            {console.log("**********************************************: ", valueEditar.idMaterial)}
                            <FormularioMaterial material_Editar={valueEditar} />
                        </div>

                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}