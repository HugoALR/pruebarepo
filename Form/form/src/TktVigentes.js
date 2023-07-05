import React from "react";
import { Card, Container, Row, Col, Image, Button,Navbar } from "react-bootstrap";
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
import logo from "../src/img/logo.png";

import {useNavigate} from "react-router-dom";

function TktVigentes() {
  const navigate=useNavigate();
  const onClickOpenLogin = async (e)=>navigate("/Login");
  const onClickOpenCtgory = async (e) => navigate("/Category");
  const onClickOpenTicket = async (e) => navigate("/TicketV");
  const onClickOpenEvent = async (e) => navigate("/Event");
  const onClickOpenConcert = async (e) => navigate("/Concert");
  const onClickOpenAdminPage = async (e) => navigate("/AdminPage");
  const  onClickOpenTicket2 = async (e)=>navigate("/Ticket");
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
          <Button variant="outline-danger" onClick={onClickOpenEvent}>EVENTS</Button>
          <Button variant="outline-danger" onClick={onClickOpenCtgory}>CATEGORY</Button>
          <Button variant="outline-danger" onClick={onClickOpenTicket}>TICKETS</Button>
          <Button variant="outline-danger" onClick={onClickOpenLogin}>HOME</Button>
        </Container>
      </Navbar>
    <Container style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"20px"}}>
        <h1 style={{color:"white"}}>!YOUR TICKETS!</h1>
    </Container>
    <MDBContainer style={{ marginTop: "30px" }}>
      <MDBCard>
        <MDBRow className="g-0 d-flex align-items-center">
          <MDBCol md="2">
            <MDBCardImage
              src="https://cdn.teleticket.com.pe/especiales/martin-garrix-2022/images/banner-resp-martin-garrix.jpg"
              alt="phone"
              className="rounded-t-5 rounded-tr-lg-0"
              width={250}
              fluid
            />
          </MDBCol>

          <MDBCol md="10">
            <MDBCard>
              <MDBCardHeader style={{ backgroundColor: "DarkSlateBlue" }}>
                <h5 style={{ textAlign: "center", color: "white" }}>
                  DATOS DEL CONCIERTO
                </h5>
              </MDBCardHeader>
              <MDBCardBody style={{ backgroundColor: "AliceBlue" }}>
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
                      <h6 style={{ textAlign: "center" }}>DURACION: 2 HORAS</h6>
                    </MDBCol>
                    <MDBCol size="4">
                      <h6 style={{ textAlign: "center" }}>TOTAL BOLETOS: 05</h6>
                    </MDBCol>
                    <MDBCol size="4">
                      <h6 style={{ textAlign: "center" }}>
                        TOTAL COMPRA: $250.00
                      </h6>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCardBody>
              <Button variant="success" disabled>
                VERIFICACION ACEPTADA
              </Button>
              <Button variant="dark" onClick={onClickOpenTicket2}>
               VER QR
             </Button>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
     <MDBContainer style={{ marginTop: "10px" }}>
     <MDBCard>
       <MDBRow className="g-0 d-flex align-items-center">
         <MDBCol md="2">
           <MDBCardImage
             src="https://img.europapress.es/fotoweb/fotonoticia_20190430160405_420.jpg"
             alt="phone"
             className="rounded-t-5 rounded-tr-lg-0"
             width={250}
             fluid
           />
         </MDBCol>

         <MDBCol md="10">
           <MDBCard>
             <MDBCardHeader style={{ backgroundColor: "DarkSlateBlue" }}>
               <h5 style={{ textAlign: "center", color: "white" }}>
                 DATOS DEL CONCIERTO
               </h5>
             </MDBCardHeader>
             <MDBCardBody style={{ backgroundColor: "AliceBlue" }}>
               <MDBCardTitle style={{ textAlign: "center" }}>
                 CONCIERTO BAD BUNNY
               </MDBCardTitle>
               <MDBContainer>
                 <MDBRow>
                   <MDBCol size="4">
                     <h6 style={{ textAlign: "center" }}>
                       CATEGORIA: REGUETON
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
                     <h6 style={{ textAlign: "center" }}>DURACION: 2 HORAS</h6>
                   </MDBCol>
                   <MDBCol size="4">
                     <h6 style={{ textAlign: "center" }}>TOTAL BOLETOS: 05</h6>
                   </MDBCol>
                   <MDBCol size="4">
                     <h6 style={{ textAlign: "center" }}>
                       TOTAL COMPRA: $250.00
                     </h6>
                   </MDBCol>
                 </MDBRow>
               </MDBContainer>
             </MDBCardBody>
             <Button variant="success" disabled>
               VERIFICACION ACEPTADA
             </Button>
             <Button variant="dark" onClick={onClickOpenTicket2}>
               VER QR
             </Button>
           </MDBCard>
         </MDBCol>
       </MDBRow>
     </MDBCard>
   </MDBContainer>
   <Container
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "10px",
      marginTop:"20px"
    }}>
      <Button variant="outline-danger" onClick={onClickOpenLogin}>RETURN</Button>
   </Container>
   </>
  );
}

export default TktVigentes;
