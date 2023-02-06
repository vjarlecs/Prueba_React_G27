import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

let dateNow = new Date().toISOString();
dateNow = dateNow.split(".")[0];
dateNow = dateNow.slice(0, -3);

function NavScroll({ onSearch }) {
  const [dates, setDates] = useState([dateNow, dateNow]);

  const handlerSearch = (e) => {
    const name = e.target.name;

    setDates((prev) => {
      const newDates = [...prev];
      const index = name === "date-start" ? 0 : 1;
      newDates[index] = e.target.value;

      onSearch([new Date(newDates[0]), new Date(newDates[1])]);
      return newDates;
    });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="" href="#">
          Filtro por rango de fecha
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Container fluid className="d-flex gap-3">
            <Form className="d-flex flex-column w-100">
              <Form.Label className="text-white">Fecha de inicio</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Filtrar Indicador Economico"
                className="me-2"
                aria-label="Search"
                name="date-start"
                value={dates[0]}
                onChange={handlerSearch}
              />
            </Form>
            <Form className="d-flex flex-column w-100">
              <Form.Label className="text-white">Fecha final</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Filtrar Indicador Economico"
                className="me-2"
                aria-label="Search"
                name="date-end"
                value={dates[1]}
                onChange={handlerSearch}
              />
            </Form>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
