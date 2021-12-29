import React, { Component } from "react";
import Footer from "./componentes/Footer";
import MainHeader from "./componentes/MainHeader";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Horarios from "./pages/Horarios";
import Materiales from "./pages/Materiales";
import Salas from "./pages/Salas";
import './App.css'
//import {Button} from 'reactstrap'

class App extends Component {
  //super
  //constructor
  render() {
    return (
      <div className="fondo">
        <div className="container bg-light">
          <MainHeader />
          <div>
            <Router>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/Salas">Salas</Link>
                <Link className="navbar-brand" to="/Materiales">Materiales</Link>
                <Link className="navbar-brand" to="/Horarios">Horarios</Link>
              </nav>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="Salas" element={<Salas />}></Route>
                <Route exact path="Materiales" element={<Materiales />}></Route>
                <Route exact path="Horarios" element={<Horarios />} />
              </Routes>
            </Router>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
