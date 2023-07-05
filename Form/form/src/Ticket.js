import React, { useState } from "react";
import logo from "../src/img/logo.png";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

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

import { Button, Container, Navbar, Form, Alert, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function generaralerta() {
  alert("!TU CODIGO SE ESTA REGENERANDO!");
  window.location.href = "";
}

function Ticket() {
  const navigate = useNavigate();
  const onClickOpenLogin = async (e) => navigate("/Login");
  const onClickOpenCtgory = async (e) => navigate("/Category");
  const onClickOpenTicket = async (e) => navigate("/TicketV");
  const onClickOpenEvent = async (e) => navigate("/Event");
  const onClickOpenConcert = async (e) => navigate("/Concert");
  const onClickOpenAdminPage = async (e) => navigate("/AdminPage");

  const [modalInsertar, setModalInsertar] = useState(false);

  const abrirModalInsertar = () => {
    setModalInsertar(true);
  };

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            <img src={logo} width="80" height="60"></img>
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
          <Button variant="outline-danger" onClick={onClickOpenEvent}>
            EVENTS
          </Button>
          <Button variant="outline-danger" onClick={onClickOpenCtgory}>
            CATEGORY
          </Button>
          <Button variant="outline-danger" onClick={onClickOpenTicket}>
            TICKETS
          </Button>
          <Button variant="outline-danger" onClick={onClickOpenLogin}>
            HOME
          </Button>
        </Container>
      </Navbar>

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <h1 style={{ color: "WHITE" }}>YOUR TICKET IS READY! ORDER#12345</h1>
      </Container>

      <MDBContainer style={{ marginTop: "60px" }}>
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
                <MDBCardHeader style={{ backgroundColor: "RoyalBlue" }}>
                  <h5 style={{ textAlign: "center", color: "white" }}>
                    DATOS DEL CONCIERTO
                  </h5>
                </MDBCardHeader>
                <MDBCardBody style={{ backgroundColor: "MediumSlateBlue" }}>
                  <MDBCardTitle style={{ textAlign: "center" }}>
                    CONCIERTO MARTIN GARRIX
                  </MDBCardTitle>
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol size="4">
                        <h6 style={{ textAlign: "center" }}>
                          CATEGORIA: ELECTRONICA
                        </h6>
                      </MDBCol>
                      <MDBCol size="4">
                        <h6 style={{ textAlign: "center" }}>FECHA: 16/05/23</h6>
                      </MDBCol>
                      <MDBCol size="4">
                        <h6 style={{ textAlign: "center" }}>HORA: 7:00 PM</h6>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCardBody>
              </MDBCard>
              <MDBCard>
                <MDBCardBody style={{ backgroundColor: "Lavender" }}>
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol size="4">
                        <h6 style={{ textAlign: "center" }}>
                          DURACION: 2 HORAS
                        </h6>
                      </MDBCol>
                      <MDBCol size="4">
                        <h6 style={{ textAlign: "center" }}>
                          TOTAL BOLETOS: 05
                        </h6>
                      </MDBCol>
                      <MDBCol size="4">
                        <h6 style={{ textAlign: "center" }}>
                          TOTAL COMPRA: $250.00
                        </h6>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCardBody>

                <MDBCardBody>
                  <MDBContainer>
                    <MDBRow
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <h8 style={{ textAlign: "center" }}>
                        1234536453656475324232
                      </h8>
                      <Image
                        src="https://c1.img2qr.com/images/simple_qrcode.png?x-oss-process=image/quality,Q_80"
                        rounded
                        style={{
                          objectFit: "cover",
                          width: "30%",
                          height: "50%",
                        }}
                      />
                      <h8 style={{ textAlign: "center" }}>
                        XSJCFDHJTQFWCJEVDQSU
                      </h8>
                      <Button
                        style={{ marginTop: "10px" }}
                        variant="success"
                        onClick={generaralerta}
                      >
                        REGENERATE QR
                      </Button>
                      <Button
                        style={{ marginTop: "10px" }}
                        variant="danger"
                        onClick={() => abrirModalInsertar()}
                      >
                        TRANSFERIR
                      </Button>
                    </MDBRow>
                  </MDBContainer>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-left"
        style={{ marginTop: "110px" }}
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

      <Modal isOpen={modalInsertar} style={{ marginTop: "180px" }}>
        <ModalHeader style={{ justifyContent: "center" }}>
          <div>
            <h3>DATOS PARA TRANSFERIR</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <Form.Label>INSERT THE USER TO TRANSFER</Form.Label>
            <input
              className="form-control"
              type="text"
              style={{ borderColor: "crimson" }}
            />
            <br />

            <label>EMAIL USER TO TRASNFER</label>
            <input
              className="form-control"
              type="text"
              style={{ borderColor: "crimson" }}
            />
            <br />

            <label>DUI USER TO TRANSFER</label>
            <input
              className="form-control"
              type="text"
              style={{ borderColor: "crimson" }}
            />
            <br />

            <label>YOUR PASSWORD</label>
            <input
              className="form-control"
              type="password"
              style={{ borderColor: "crimson" }}
            />
            <br />
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="ACCEPT TERMS AND CONDITIONS"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={() => setModalInsertar(false)}
          >
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Ticket;
