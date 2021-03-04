import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_36ATbPFFwterGUTsqnHSd");

function CustomForm() {
  const [informacion, setInformacion] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha: "",
    horario: "",
  });

  const [enviado, setEnviado] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInformacion((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    if (
      informacion.nombre === "" ||
      informacion.correo === "" ||
      informacion.telefono === "" ||
      informacion.fecha === ""
    ) {
      window.alert("Por favor llena todos los campos");
    } else {
      emailjs.send("default_service", "template_agyu56r", informacion).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setEnviado(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }
  }
  return (
    <Form>
      <Form.Group as={Row} controlId="formZoom">
        <Form.Label>Nombre</Form.Label>
        <Col>
          <Form.Control
            type="text"
            placeholder="Nombre y apellido"
            name="nombre"
            onChange={handleChange}
            required
            value={informacion.nombre}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formZoom">
        <Form.Label>Email</Form.Label>
        <Col>
          <Form.Control
            type="email"
            placeholder="example@mail.com"
            name="correo"
            onChange={handleChange}
            required
            value={informacion.correo}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formZoom">
        <Form.Label>Teléfono</Form.Label>
        <Col>
          <Form.Control
            type="text"
            placeholder="0999999999"
            name="telefono"
            onChange={handleChange}
            required
            value={informacion.telefono}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formZoom">
        <Form.Label>Fecha</Form.Label>
        <Col>
          <Form.Control
            type="date"
            placeholder=""
            name="fecha"
            onChange={handleChange}
            required
            value={informacion.fecha}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formZoom">
        <Form.Label>Horario</Form.Label>
        <Col>
          <Form.Control
            as="select"
            name="horario"
            onChange={handleChange}
            required
            value={informacion.horario}
          >
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
            <option value="Noche">Noche</option>
          </Form.Control>
        </Col>
      </Form.Group>
      <div style={{ textAlign: "center" }}>
        {enviado ? (
          <p
            style={{
              textAlign: "center",
              backgroundColor: "#4fce5d",
              display: "inline-block",
              marginTop: "30px",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            ✔️ ¡Tu cita ha sido agendada!
          </p>
        ) : (
          <Button
            variant="primary"
            type="submit"
            className="custom-button"
            onClick={handleClick}
          >
            ENVIAR
          </Button>
        )}
      </div>
    </Form>
  );
}

export default CustomForm;
