import React from "react";
import PropTypes from "prop-types";
import "./estudiante.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Estudiante = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="estudiante">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Estudiante
          </Typography>
          <Typography variant="h5" component="div">
            {`${props.nombre}`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={(e) => setOpen(!open)} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`${props.nombre}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`${props.nombre}`} {`${props.apellido}`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

Estudiante.propTypes = {};

Estudiante.defaultProps = {};

export default Estudiante;
