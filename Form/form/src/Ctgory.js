import React, { useState } from "react";
import "./App.css";
import logo from "../src/img/logo.png";
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
import { useNavigate } from "react-router-dom";

function Ctgory() {
  const [modalInsertar, setModalInsertar] = useState(false);

  const abrirModalInsertar = () => {
    setModalInsertar(true);
  };
  const navigate = useNavigate();
  const onClickOpenLogin = async (e) => navigate("/Login");
  const onClickOpenCtgory = async (e) => navigate("/Category");
  const onClickOpenTicket = async (e) => navigate("/TicketV");
  const onClickOpenEvent = async (e) => navigate("/Event");
  const onClickOpenConcert = async (e) => navigate("/Concert");
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
            justifyContent: "flex-END",
            gap: "10px",
          }}
        >
         <Button variant="outline-danger" onClick={onClickOpenEvent}>EVENTS</Button>
          <Button variant="outline-danger" onClick={onClickOpenCtgory}>CATEGORY</Button>
          <Button variant="outline-danger" onClick={onClickOpenTicket}>TICKETS</Button>
          <Button variant="outline-danger" onClick={onClickOpenLogin}>HOME</Button>
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
        <h1 style={{ color: "white" }}>Category Editor</h1>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.haztucompra.net/wp-content/uploads/2022/09/Bad-Bunny-en-concierto.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              CATEGORY: CONCERTS/MUSIC
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              The best concerts and your favorite artists in one place...
            </Card.Text>
          </Card.Body>
          <ListGroup
            style={{ textAlign: "center" }}
            className="list-group-flush"
          >
            <ListGroup.Item>
              Inclusion of any type of musical concert...
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://quesignifica.club/wp-content/uploads/ong.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              CATEGORY: ONG Charity Events{" "}
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              Events carried out with the purpose of obtaining funds for
              ONG'S...
            </Card.Text>
          </Card.Body>
          <ListGroup
            style={{ textAlign: "center" }}
            className="list-group-flush"
          >
            <ListGroup.Item>
              inclusion of any event or gathering of ONG'S...
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://fastly.4sqi.net/img/general/600x600/l69s-ZA07h79PS87n-k5P-m-ip_IL8SveAcHNdWXSC4.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              CATEGORY: THEATER{" "}
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              the best plays in the country, with the best performances,In
              addition to the comfort of the new theaters
            </Card.Text>
          </Card.Body>
          <ListGroup
            style={{ textAlign: "center" }}
            className="list-group-flush"
          >
            <ListGroup.Item>
              Inclusion to any type of work, act, etc...
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://caaci-iberoamerica.org/wp-content/uploads/2019/05/Semana-del-cine-chileno-400x400.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              CATEGORY: CINEMA{" "}
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              The best movie billboard in the country, with all its premieres
              and upcoming movies
            </Card.Text>
          </Card.Body>
          <ListGroup
            style={{ textAlign: "center" }}
            className="list-group-flush"
          >
            <ListGroup.Item>
              Inclusion of any type of movie, series, etc...
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Button className="btn-lg" onClick={() => abrirModalInsertar()}>
          CREATE CATEGORY
        </Button>
        <Button
          className="btn-lg btn-danger"
          style={{ marginLeft: "10px" }}
          onClick={onClickOpenLogin}
        >
          RETURN
        </Button>
      </Container>

      <Modal isOpen={modalInsertar} style={{ marginTop: "180px" }}>
        <ModalHeader style={{ justifyContent: "center" }}>
          <div>
            <h3>Insertar Nueva Categoria</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <Form.Label>INSERT IMAGE CATEGORY</Form.Label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" style={{ borderColor: "crimson" }} />
            </Form.Group>
            <br />

            <label>CATEGORY NAME</label>
            <input
              className="form-control"
              type="text"
              style={{ borderColor: "crimson" }}
            />
            <br />

            <label>CATEGORY DESCRIPTION</label>
            <Form.Control
              as="textarea"
              rows={2}
              style={{ borderColor: "crimson" }}
            />
            <br />

            <label>CATEGORY INCLUSION</label>
            <input
              className="form-control"
              type="text"
              style={{ borderColor: "crimson" }}
            />
            <br />
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

export default Ctgory;
