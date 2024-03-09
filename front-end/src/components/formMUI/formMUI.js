import React from "react";
import PropTypes from "prop-types";
import "./formMUI.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
const FormMui = (props) => {
  const [errorValidacion, setErrorValidacion] = useState(false);

  const [formValues, setFormValues] = useState({});
  const [nombre, setNombre] = useState("");

  const [mensaje, setMensaje] = useState("");

  const imprimir = () => {
    console.log(nombre);
    console.log(formValues.email);
    console.log(formValues.emailConfirmacion);
  };

  useEffect(() => {
    console.log("nombre useeffect");

    if (formValues.email !== formValues.emailConfirmacion) {
      setMensaje("Los correos no coinciden");
      setErrorValidacion(true);
    } else {
      setMensaje("Correos coinciden");
      setErrorValidacion(false);
    }
  }, [formValues]);

  useEffect(() => {
    console.log("nombre useeffect", props.lista);
  }, []);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="formMUI">
      FormMui Component
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setNombre(e.target.value);
        }}
        id="nombre"
        name="nombre"
        label="Nombre"
        variant="outlined"
      />
      <TextField
        id="email"
        onChange={handleInputChange}
        label="Correo"
        name="email"
        variant="outlined"
      />
      <TextField
        error={errorValidacion}
        onChange={handleInputChange}
        id="emailConfirmacion"
        name="emailConfirmacion"
        label="Confirmacion correo"
        variant="outlined"
      />
      <Button onClick={imprimir} variant="contained">
        Enviar
      </Button>
      <br /> {mensaje} <br /> <br /> <br />
    </div>
  );
};

FormMui.propTypes = {};

FormMui.defaultProps = {};

export default FormMui;
