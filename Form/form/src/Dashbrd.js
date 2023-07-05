import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import logo from "../src/img/logo.png";
import { Button, Container, Navbar, Table, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LinesChart from "./LinesChart";
import PiesChart from "./PiesChart";
import BarsChart from "./BarsChart";

function Dashbrd() {

  const navigate = useNavigate();
  const onClickOpenAdminEvent = async (e) => navigate("/AdminEvent");
  const onClickOpenAdminUser = async (e) => navigate("/AdminUser");
  const onClickOpenDashboard = async (e) => navigate("/Dashbrd");
  const onClickOpenEventCreate = async (e) => navigate("/EventCreator");
  const onClickOpenAdminPage = async (e) => navigate("/AdminPage");

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
         <Button variant="outline-danger" onClick={onClickOpenAdminEvent}>
            ADMIN EVENT
          </Button>
          <Button variant="outline-danger" onClick={onClickOpenAdminUser}>
            ADMIN USERS
          </Button>
          <Button variant="outline-danger" onClick={onClickOpenDashboard}>
            DASHBOARD
          </Button>
          <Button variant="outline-danger" onClick={onClickOpenEventCreate}>
            EVENT CREATOR
          </Button>
          <Button variant="outline-danger" onClick={onClickOpenAdminPage}>
            HOME
          </Button>
        </Container>
      </Navbar>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <h1 style={{ color: "white" }}>Admin Dashboard</h1>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      ></Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Container>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Total Sales & Assist
          </h2>
          <Table striped bordered hover size="sm" variant="dark" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Last Event</th>
                <th>Total Assist</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <td>1</td>
                <td>BAD BUNNY WORLD TOUR</td>
                <td>5,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>BAD BUNNY WORLD TOUR</td>
                <td>5,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BAD BUNNY WORLD TOUR</td>
                <td>5,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BAD BUNNY WORLD TOUR</td>
                <td>5,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BAD BUNNY WORLD TOUR</td>
                <td>5,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BAD BUNNY WORLD TOUR</td>
                <td>5,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BAD BUNNY WORLD TOUR</td>
                <td>5,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BAD BUNNY WORLD TOUR</td>
                <td>5,000</td>
                <td>$10,000</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container>
          <LinesChart />
        </Container>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <Container>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Top events
          </h2>
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name Event</th>
                <th>Assist</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <td>1</td>
                <td>Martin Garriz SV</td>
                <td>20,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Martin Garriz SV</td>
                <td>20,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Martin Garriz SV</td>
                <td>20,000</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Martin Garriz SV</td>
                <td>20,000</td>
                <td>$10,000</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Last Users
          </h2>
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <td>1</td>
                <td>KHAOS10</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>2</td>
                <td>ErickVazq1</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>3</td>
                <td>DavidM</td>
                <td>Event Creator</td>
              </tr>
              <tr>
                <td>3</td>
                <td>DavidM</td>
                <td>Event Creator</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Monthly savings
          </h2>
          <BarsChart />
        </Container>
      </Container>
    </>
  );
}

export default Dashbrd;
