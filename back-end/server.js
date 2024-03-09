const express = require("express");
const cors = require("cors");
const app = express();

const port = 3001;

app.use(cors());

app.get("/api", (req, res) => {
  res.send({ message: "Hello from server!" });
});

app.get("/api/estudiantes", (req, res) => {
  let listaDeEstudiantes = [
    { nombre: "juan", apellido: "perez" },
    { nombre: "pedro", apellido: "perez" },
    { nombre: "luis", apellido: "perez" },
    { nombre: "sergio", apellido: "m" },
    { nombre: "luis", apellido: "perez" },
    { nombre: "sergio", apellido: "m" },
  ];

  res.send(listaDeEstudiantes);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
