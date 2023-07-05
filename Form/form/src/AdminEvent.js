import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import logo from "../src/img/logo.png";

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
  MDBFooter
} from "mdb-react-ui-kit";

import {
  Button,
  Container,
  Navbar,
  Form,
  Alert,
  Image,
  Table,
} from "react-bootstrap";

function generaralerta() {
  alert("!TU CODIGO SE ESTA REGENERANDO!");
  window.location.href = "";
}

function AdminEVT() {

  const navigate = useNavigate();
  const onClickOpenAdminEvent = async (e) => navigate("/AdminEvent");
  const onClickOpenAdminUser = async (e) => navigate("/AdminUser");
  const onClickOpenDashboard = async (e) => navigate("/Dashbrd");
  const onClickOpenEventCreate = async (e) => navigate("/EventCreator");
  const  onClickOpenAdminPage = async (e)=>navigate("/AdminPage");

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
          <img
            src={logo}
            width="80"
            height="60"
          ></img>
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
          <Button variant="outline-danger" onClick={onClickOpenAdminEvent}>ADMIN EVENT</Button>
          <Button variant="outline-danger" onClick={onClickOpenAdminUser}>ADMIN USERS</Button>
          <Button variant="outline-danger" onClick={onClickOpenDashboard}>DASHBOARD</Button>
          <Button variant="outline-danger" onClick={onClickOpenEventCreate}>EVENT CREATOR</Button>
          <Button variant="outline-danger" onClick={onClickOpenAdminPage}>HOME</Button>
        </Container>
      </Navbar>

      <MDBContainer style={{ marginTop: "130px" }}>
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
                          PATROCINADORES: COCACOLA
                        </h6>
                      </MDBCol>
                      <MDBCol size="4">
                        <h6 style={{ textAlign: "center" }}>
                          PRODUCCION: TODOTICKET
                        </h6>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCardBody>

                <MDBCardBody>
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol size="3">
                        <Button variant="outline-dark">
                          TOTAL DE TKT: 550TKT
                        </Button>
                      </MDBCol>
                      <MDBCol size="3">
                        <Button variant="outline-dark">
                          TOTAL TKT VENDIDOS: 450TKT
                        </Button>
                      </MDBCol>
                      <MDBCol size="3">
                        <Button variant="outline-dark">
                          TOTAL ASISTENCIA AL EVENTO: 425P
                        </Button>
                      </MDBCol>
                      <MDBCol size="3">
                        <Button variant="outline-dark">
                          TOTAL TKT CANJEADOS: 425TKT
                        </Button>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCardBody>

                <Container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Table striped bordered hover variant="dark" responsive>
                    <thead>
                      <tr>
                        <th>LOCALIDADES</th>
                        <th>VENTAS X LOCALIDAD</th>
                        <th>ASISTENCIA X LOCALIDAD</th>
                        <th>CANJEADOS X LOCALIDAD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>GENERAL</td>
                        <td>100TKT</td>
                        <td>100 PER</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>VIP</td>
                        <td>100TKT</td>
                        <td>80PER</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>PLATINMUM</td>
                        <td>100TKT</td>
                        <td>90PER</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>ULTRA</td>
                        <td>150TKT</td>
                        <td>50PER</td>
                        <td>100</td>
                      </tr>
                      <tr className="table-danger">
                        <td>TOTALES</td>
                        <td>550TKT</td>
                        <td>450PER</td>
                        <td>500</td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
                <Container  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom:"10px"
                  }}>
                  <Button variant="outline-danger">VOLVER A EVENTOS</Button>
                </Container>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
      <MDBFooter bgColor="dark" className="text-center text-lg-left" style={{marginTop:"69px"}}>
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

export default AdminEVT;
