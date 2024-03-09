import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./lista.css";

import Estudiante from "../estudiante/estudiante";
const Lista = (props) => {
  useEffect(() => {
    console.log("nombre useeffect", props.lista);

    let lista = props.lista;
  }, []);

  return (
    <div className="lista">
      <h1>Lista</h1>

      {props.lista.map((row, index) => {
        return (
          <div key={index}>
            <Estudiante nombre={row.nombre} apellido={row.apellido} />
          </div>
        );
      })}
    </div>
  );
};

Lista.propTypes = {};

Lista.defaultProps = {};

export default Lista;
