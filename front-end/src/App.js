import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/form";
import FormMUI from "./components/formMUI/formMUI";
import Lista from "./components/lista/lista";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
function App() {
  const MesnajeDeTitulo = "Este es el titulo de la app";
  const [listaDeEstudiantes, setListaDeEstudiantes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/estudiantes").then((res) => {
      console.log(res.data);
      setListaDeEstudiantes(res.data);
    });
  }, []);

  return (
    <div className="App">
      <nav>
        <a href="/form">Form</a> &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href="/formMUI">Form MUI</a> &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href="/lista">Lista</a>
      </nav>
      <hr />
      <Router>
        <Routes>
          <Route path="/form" element={<Form titulo={MesnajeDeTitulo} />} />
          <Route
            path="/formMUI"
            element={<FormMUI titulo={MesnajeDeTitulo} />}
          />
          <Route path="/lista" element={<Lista lista={listaDeEstudiantes} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
