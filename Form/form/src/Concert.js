import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/img/logo.png";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import {
  TfiBriefcase,
  TfiMapAlt,
  TfiGallery,
  TfiArrowCircleDown,
  TfiLocationPin,
  TfiCalendar,
  TfiAnnouncement,
  TfiAlignCenter,
} from "react-icons/tfi";
import {
  Container,
  Navbar,
  NavbarBrand,
  Button,
  Image,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function generaralerta(){
  alert("!SE TE REDIGIRA A LA PAGINA DE PAGOS!");
  window.location.href = "https://www.bancoagricola.com"; 
}

function Concert() {
  const navigate=useNavigate();
  const  onClickOpenPay2 = async (e)=>navigate("/Pay2");
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
          <Button variant="outline-danger">HOME</Button>
          <Button variant="outline-danger">EVENTS</Button>
          <Button variant="outline-danger">CATEGORY</Button>
          <Button variant="outline-danger">TICKETS</Button>
        </Container>
      </Navbar>
      <Container
        style={{ width: "1300px", height: "200px", marginTop: "10px" }}
      >
        <Image
          src="https://cdn.wallpapersafari.com/19/29/R9IFyx.png"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        ;
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "10px",
          width: "1300px",
          marginTop: "40px",
        }}
      >
        <h3 style={{ color: "yellow" }}>MARTIN GARRIX</h3>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "1300px",
          marginTop: "20px",
        }}
      >
        <h6 style={{ color: "MediumSeaGreen" }}>
          INFORMACION DE MARTIN GARRIX
        </h6>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "1300px",
          marginTop: "10px",
        }}
      >
        <h8 style={{ color: "white" }}>
          Martijn Gerard Garritsen, más conocido como Martin Garrix (Amstelveen;
          14 de mayo de 1996),​ es un DJ y productor neerlandés fundador del
          sello STMPD RCRDS. Ingresó a la encuesta anual Top 100 DJ's realizada
          por la revista DJ Magazine, directamente al puesto 40. En 2014, obtuvo
          el 4°puesto y en 2015 fue nombrado 3º. En 2016, 2017 y 2018 fue
          elegido por la revista como mejor DJ del mundo, colocándolo en el
          puesto número 1.
        </h8>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "1300px",
          marginTop: "20px",
        }}
      >
        <h4 style={{ color: "yellow" }}>DATOS DEL CONCIERTO</h4>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "1300px",
          marginTop: "px",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "1300px",
            marginTop: "20px",
          }}
        >
          <h6 style={{ color: "white", textAlign: "center" }}>
            <TfiCalendar style={{ marginRight: "5px", marginBottom: "5px" }} />
            <span style={{ color: "MediumSeaGreen", textAlign: "center" }}>
              FECHA:
            </span>{" "}
            14/05/23
          </h6>
          <h6 style={{ color: "white", textAlign: "center" }}>
            <TfiArrowCircleDown
              style={{ marginRight: "5px", marginBottom: "5px" }}
            />
            <span style={{ color: "MediumSeaGreen", textAlign: "center" }}>
              DURACION:
            </span>{" "}
            2 HORAS
          </h6>
          <h6 style={{ color: "white", textAlign: "center" }}>
            <TfiMapAlt style={{ marginRight: "5px", marginBottom: "5px" }} />
            <span style={{ color: "MediumSeaGreen", textAlign: "center" }}>
              LOCALIZACION:
            </span>{" "}
            ESTADIO CUSCATLAN
          </h6>
          <h6 style={{ color: "white", textAlign: "center" }}>
            <TfiAnnouncement
              style={{ marginRight: "5px", marginBottom: "5px" }}
            />
            <span style={{ color: "MediumSeaGreen", textAlign: "center" }}>
              PATROCINADOR:
            </span>{" "}
            COCA COLA
          </h6>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1px",
            }}
          >
            <Button
              disabled
              variant="danger"
              size="sm"
              style={{ width: "130px", justifyContent: "center" }}
            >
              GENERAL $150
            </Button>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1px",
            }}
          >
            <Button
              disabled
              variant="danger"
              size="sm"
              style={{ width: "130px", justifyContent: "center" }}
            >
              PLATINUM $150
            </Button>
          </Container>
          <Container style={{ display: "flex", justifyContent: "center" }}>
            <Button
            disabled
              variant="danger"
              size="sm"
              style={{ width: "130px", justifyContent: "center" }}
            >
              ULTRA VIP $150
            </Button>
          </Container>
        </Container>

        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "1300px",
            marginTop: "20px",
          }}
        >
          <h6 style={{ color: "white", textAlign: "center" }}>
            <TfiArrowCircleDown
              style={{ marginRight: "5px", marginBottom: "10px" }}
            />
            <span style={{ color: "MediumSeaGreen", textAlign: "center" }}>
              HORA:
            </span>{" "}
            1:30 PM
          </h6>
          <h6 style={{ color: "white", textAlign: "center" }}>
            <TfiAlignCenter
              style={{ marginRight: "5px", marginBottom: "10px" }}
            />
            <span style={{ color: "MediumSeaGreen", textAlign: "center" }}>
              CATEGORIA:
            </span>{" "}
            MUSICA ELECTRONICA
          </h6>
          <h6 style={{ color: "white", textAlign: "center" }}>
            <TfiBriefcase
              style={{ marginRight: "5px", marginBottom: "10px" }}
            />
            <span style={{ color: "MediumSeaGreen", textAlign: "center" }}>
              PRODUCCION:
            </span>{" "}
            TODOTICKET
          </h6>
          <h6 style={{ color: "white", textAlign: "center" }}>
            <TfiLocationPin
              style={{ marginRight: "5px", marginBottom: "10px" }}
            />
            <span style={{ color: "MediumSeaGreen", textAlign: "center" }}>
              LOCALIDAD:
            </span>{" "}
            PLATINUM
          </h6>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3px",
            }}
          >
            <Button
              variant="danger"
              size="sm"
              style={{ width: "130px", justifyContent: "center" }}
            >
              PRECIO: $150
            </Button>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3px",
            }}
          >
            <Button
              variant="danger"
              size="sm"
              style={{ width: "130px", justifyContent: "center" }}
            >
              TICKETS: 3TKT
            </Button>
          </Container>
          <Container style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="danger"
              size="sm"
              style={{ width: "130px", justifyContent: "center" }}
            >
              TOTAL: $450
            </Button>
          </Container>
        </Container>
      </Container>
      <Container
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        
        <Button onClick={onClickOpenPay2} variant="success" size="lg" style={{ width: "300px" }}>
          REALIZAR COMPRA
        </Button>
      </Container>
    </>
  );
}

export default Concert;
