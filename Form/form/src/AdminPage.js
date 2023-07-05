import React, { useState } from "react";
import logo from "../src/img/logo.png";
import {useNavigate} from "react-router-dom";
import "./App.css";
import {
  Button,
  Container,
  Navbar,
  Table,
  Image,
  Card,
  ListGroup,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function AdminPage() {
  
  const [modalInsertar, setModalInsertar] = useState(false);

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
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h1 style={{ color: "white" }}>ADMIN PAGE</h1>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Button variant="success" style={{marginTop:"10px"}} onClick={onClickOpenAdminEvent}>AdminEvent</Button>
        <Button variant="danger" style={{marginTop:"10px"}} onClick={onClickOpenAdminUser}>AdminUsers</Button>
        <Button variant="warning" style={{marginTop:"10px"}} onClick={onClickOpenDashboard}>Dashboard</Button>
        <Button variant="info" style={{marginTop:"10px"}} onClick={onClickOpenEventCreate}>EventCreator</Button>
      </Container>
    </>
  );
}

export default AdminPage;
