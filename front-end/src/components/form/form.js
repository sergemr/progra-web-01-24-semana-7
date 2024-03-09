import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./form.css";

const Form = (props) => {
  const [color, setColor] = useState("red");
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

  useEffect(() => {
    console.log("nombre useeffect", props.lista);
  }, []);
  return (
    <div className="form">
      <h1 className="letra-verde">{props.titulo}</h1>
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
        style={{ backgroundColor: `${color}` }}
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
      <input
        type="text"
        name="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        placeholder="Color"
      />
      <br />
      <button onClick={imprimir}>Enviar</button>
      <br /> {mensaje} <br /> <br /> <br />
    </div>
  );
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
