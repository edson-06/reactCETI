import { useEffect, useState } from "react";

export default function FormularioMaterial({ material_Editar }) {
    const [data, setData] = useState({
        idMaterial: 0,
        nombreMaterial: "",
        descripcionMaterial: "",
        estadoMaterial: false,
        cantidadMaterial: 0,
        data: [],
    });

    function recibeDatos(event) {
        event.preventDefault();
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(data.nombreMaterial);
        event.preventDefault();
    }
    function agregarDatos(event) {
        event.preventDefault();
        fetch("/addMaterial", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => ({
                idMaterial: 0,
                nombreMaterial: "",
                descripcionMaterial: "",
                estadoMaterial: false,
                cantidadMaterial: 0,
            }));
    }
    function editarDatos(event) {
        event.preventDefault();
        fetch(`/updateMaterial/${material_Editar._id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => ({
                idMaterial: 0,
                nombreMaterial: "",
                descripcionMaterial: "",
                estadoMaterial: false,
                cantidadMaterial: 0,
            }));
    }
    function refresh_Page(event) {
        console.log("recargando...");
        window.location.reload();
    }
    return (
        <div className="card">
            {material_Editar
                        ? (data.idMaterial = material_Editar.idMaterial)
                        : data.idMaterial}
                    {material_Editar
                        ? (data.nombreMaterial = material_Editar.nombreMaterial)
                        : data.nombreMaterial}
                    {material_Editar
                        ? (data.descripcionMaterial = material_Editar.descripcionMaterial)
                        : data.descripcionMaterial}
                    {material_Editar
                        ? (data.estadoMaterial = material_Editar.estadoMaterial)
                        : data.estadoMaterial}
                    {material_Editar
                        ? (data.cantidadMaterial = material_Editar.cantidadMaterial)
                        : data.cantidadMaterial}
            <form onSubmit={material_Editar ? editarDatos : agregarDatos}>
                <div className="card-header">
                    <h1>{material_Editar ? "Editar" : "Agregar nuevo"} Material </h1>
                </div>
                <div className="card-body">
                    <label>Id:</label>
                    <br />
                    <input type="text" name="idMaterial" className="form-control" placeholder="código" value={data.idMaterial} onChange={recibeDatos}/>
                    <br></br>
                    <label>Material:</label>
                    <br />
                    <input type="text" name="nombreMaterial" className="form-control" placeholder="nombre" value={data.nombreMaterial} onChange={recibeDatos} />
                    <br></br>
                    <label>Descripcion:</label>
                    <br />
                    <input type="text" name="descripcionMaterial" className="form-control" placeholder="descripción" value={data.descripcionMaterial} onChange={recibeDatos} />
                    <br></br>
                    <label>Estado:</label>
                    <br />
                    <input type="text" name="estadoMaterial" className="form-control" placeholder="estado" value={data.estadoMaterial} onChange={recibeDatos}/>
                    <br></br>
                    <label>Cantidad:</label>
                    <br />
                    <input type="text" name="cantidadMaterial" className="form-control" placeholder="cantidad" value={data.cantidadMaterial} onChange={recibeDatos} />
                    <br></br>
                </div>
                <div className="card-footer">
                    <button
                        type="submit" className={material_Editar ? "btn btn-warning" : "btn btn-success"} onClick={refresh_Page}>
                        {material_Editar ? "Editar" : "Agregar"}
                    </button>
                </div>
            </form>
        </div>
    );
}
