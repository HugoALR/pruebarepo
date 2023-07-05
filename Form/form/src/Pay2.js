import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBFooter,
} from "mdb-react-ui-kit";

import {
  Button,
  Container,
  Navbar,
  Form,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

function generaralerta() {
  alert("!TU PAGO SE A COMPLETADO CON EXITO ORDEN #12345");
}

function Pay2() {
  const navigate = useNavigate();
  const onClickOpenTicket = async (e) => navigate("/Ticket");

  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            TakeTicket Logo
          </Navbar.Brand>
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <Button variant="outline-danger">HOME</Button>
          <Button variant="outline-danger">EVENTS</Button>
          <Button variant="outline-danger">CATEGORY</Button>
          <Button variant="outline-danger">TICKETS</Button>
        </Container>
      </Navbar>

      <MDBContainer style={{ marginTop: "200px" }}>
        <MDBCard>
          <MDBRow className="g-0 d-flex align-items-center">
            <MDBCol md="4">
              <MDBCardImage
                src="https://cdn.teleticket.com.pe/especiales/martin-garrix-2022/images/banner-resp-martin-garrix.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
              />
            </MDBCol>

            <MDBCol md="8">
              <MDBCard>
                <MDBCardHeader>
                  <h5>DATOS DEL CONCIERTO</h5>
                </MDBCardHeader>
                <MDBCardBody style={{ backgroundColor: "PaleGreen" }}>
                  <MDBCardTitle>CONCIERTO MARTIN GARRIX</MDBCardTitle>
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol size="4">
                        <h6>LUGAR: LA HACIENDA</h6>
                      </MDBCol>
                      <MDBCol size="4">
                        <h6>FECHA: 16/05/23</h6>
                      </MDBCol>
                      <MDBCol size="4">
                        <h6>HORA: 7:00 PM</h6>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCardBody>
                <Container>
                  <Row>
                    <Col>
                      <div>
                        <h6>CANTIDAD DE TICKETS</h6>
                        
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => setValue(parseInt(e.target.value))}
                        />
                        <Button
                          size="sm"
                          style={{ marginLeft: "5px", marginBottom:"3px" }}
                          variant="danger"
                          onClick={handleDecrease}
                        >
                          -
                        </Button>
                        <Button
                          size="sm"
                          style={{ marginLeft: "5px",marginBottom:"3px"  }}
                          variant="success"
                          onClick={handleIncrease}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                    <Col>
                    <h6>LOCALIDAD</h6>
                      <Form.Select aria-label="Default select example" size="sm" style={{width:"250px"}}>
                        <option>SELECT LOCATION</option>
                        <option value="1">VIP</option>
                        <option value="2">GENERAL</option>
                        <option value="3">ULTRA</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Container>
              </MDBCard>
              <MDBCard>
                <MDBCardBody>
                  <h6>CARD INPUT</h6>
                  <MDBInput
                    id="typeText"
                    type="number"
                    min={0}
                    placeholder="INGRESE NUMERO DE TARJETA 16 DIGITOS"
                  />
                  <h6>CARDHOLDER NAME</h6>
                  <MDBInput
                    id="typeText"
                    type="text"
                    placeholder="INGRESE NOMBRE EN TARJETA"
                  />
                  <MDBRow className="mb-3 mt-2">
                    <MDBCol size="2">
                      <h6>EXP.MONTH</h6>
                      <Form.Select size="sm">
                        <option>Sel. Month</option>
                        <option>01</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                      </Form.Select>
                    </MDBCol>
                    <MDBCol size="2">
                      <h6>EXP.YEAR</h6>
                      <Form.Select size="sm">
                        <option>Sel. Year</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                      </Form.Select>
                    </MDBCol>
                    <MDBCol size="3" style={{ marginTop: "20px" }}>
                      <Button onClick={onClickOpenTicket}>REALIZAR PAGO</Button>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-left"
        style={{ marginTop: "152px" }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-light" href="">
            TAKETICKET.COM
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default Pay2;
