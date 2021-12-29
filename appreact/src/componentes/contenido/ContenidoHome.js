import '../../estilos/estilos.css'
import imagenes from '../imagenes/imagenes';

export default function Grid() {
    const varColor = 1;
    const varTextoBtn = 3;
    return (
        <div className="container cajaHome">
            <div className="row tarjetas">
                <div className="col-md-4">
                    <div class="card">
                        <img src={imagenes.img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Salas</h5>
                            <a href="/Salas" class="button">Acceder</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src={imagenes.img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Prestamo de equipos</h5>
                            <a href="/Materiales" class="button">Acceder</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src={imagenes.img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Horarios</h5>
                            <a href="/Horarios" class="button">Acceder</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}