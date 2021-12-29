import '../estilos/estilos.css';
import imagenes from '../componentes/imagenes/imagenes';

function Salas() {
    return (
        <div className="cajaSala">
            <div className="row tarjetas">
            <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={imagenes.img5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tecnologías Web</h5>
                            <a href="/Materiales" className="button">Acceder</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={imagenes.img6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Desarrollo de Software</h5>
                            <a href="/Horarios" className="button">Acceder</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row tarjetas">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={imagenes.img7} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Interaccion Humano-Computadora</h5>
                            <a href="/Salas" className="button">Acceder</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={imagenes.img4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sistemas Operativos</h5>
                            <a href="/Salas" className="button">Acceder</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}
export default Salas;