import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const imprimir = () => {
    console.log(nombre);
    console.log(email);
    console.log(emailConfirmacion);
  };

  useEffect(() => {
    console.log("nombre useeffect");
    if (email !== emailConfirmacion) {
      setMensaje("Los correos no coinciden");
    } else {
      setMensaje("Correos coinciden");
    }
  }, [emailConfirmacion]);
  return (
    <div className="App">
      <h1 className="letra-verde">React App</h1>
      <input
        type="text"
        name="nombre"
        onChange={(e) => {
          setNombre(e.target.value);
        }}
        placeholder="Nombre"
      />
      <br />
      <input
        type="text"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
      />
      <br />
      <input
        type="text"
        name="emailconfirmacion"
        onChange={(e) => {
          setEmailConfirmacion(e.target.value);
        }}
        placeholder="emailconfirmacion"
      />
      <br /> <br />
      <button onClick={imprimir}>Enviar</button>
      <br /> {mensaje} <br /> <br /> <br />
    </div>
  );
}

export default App;
