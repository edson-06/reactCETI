import React, { Component } from "react";

class NavBar extends Component{
  render(){
    return(
      <div className="nav-scroller py-1 mb-2 navbar-light bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.google.com">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="www.google.com">Salas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">Meteriales</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="www.google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Salas
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="www.google.com">Action</a></li>
                  <li><a className="dropdown-item" href="www.google.com">Another action</a></li>
                  <li><a className="dropdown-item" href="www.google.com">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">Horarios</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}
export default NavBar;