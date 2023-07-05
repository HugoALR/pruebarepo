import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/img/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Container, Navbar, NavbarBrand, Button } from "react-bootstrap";
import { MDBFooter } from "mdb-react-ui-kit";

function Users() {
  const navigate = useNavigate();
  const onClickOpenAdminEvent = async (e) => navigate("/AdminEvent");
  const onClickOpenAdminUser = async (e) => navigate("/AdminUser");
  const onClickOpenDashboard = async (e) => navigate("/Dashbrd");
  const onClickOpenEventCreate = async (e) => navigate("/EventCreator");
  const onClickOpenAdminPage = async (e) => navigate("/AdminPage");

  const dataUsr = [
    { id: 1, Usuarios: "HugoALR", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 2, Usuarios: "Khaos10", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 3, Usuarios: "Erick11", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 4, Usuarios: "David12", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 5, Usuarios: "Jorgito1", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 6, Usuarios: "KevinM", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 7, Usuarios: "AlexCD", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 8, Usuarios: "Lopez00", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 9, Usuarios: "GlobalPro", Roles: "Admin", Email: "hola@gmail.com" },
    { id: 10, Usuarios: "TodoTicket", Roles: "Admin", Email: "hola@gmail.com" },
  ];

  const [data, setData] = useState(dataUsr);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [UsrSelect, setUsrSelect] = useState({
    id: "",
    Usuarios: "",
    Email: "",
    Roles: "",
  });

  const seleccionarUsr = (elemento, caso) => {
    setUsrSelect(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsrSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    var dataNueva = data;
    dataNueva.map((Usr) => {
      if (Usr.id === UsrSelect.id) {
        Usr.Roles = UsrSelect.Roles;
        Usr.Usuarios = UsrSelect.Usuarios;
        Usr.Email = UsrSelect.Email;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setData(data.filter((Usr) => Usr.id !== UsrSelect.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setUsrSelect(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = UsrSelect;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  };

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
      <div className="Users">
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <h2 style={{ color: "white" }}>
            Bienvenido al Administrador de Usuarios
          </h2>
        </Container>

        <br />

        <br />

        <Container>
          <table className="table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuarios</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.Usuarios}</td>
                  <td>{elemento.Email}</td>
                  <td>{elemento.Roles}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => seleccionarUsr(elemento, "Editar")}
                    >
                      Editar
                    </button>{" "}
                    {"   "}
                    <button
                      className="btn btn-danger"
                      onClick={() => seleccionarUsr(elemento, "Eliminar")}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <button
            className="btn btn-success btn-lg"
            onClick={() => abrirModalInsertar()}
          >
            Insertar Nuevo Usuario
          </button>
        </Container>

        <Modal isOpen={modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Usuario</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>ID</label>
              <input
                className="form-control"
                readOnly
                type="text"
                name="id"
                value={UsrSelect && UsrSelect.id}
              />
              <br />

              <label>Usuario</label>
              <input
                className="form-control"
                type="text"
                name="Usuarios"
                value={UsrSelect && UsrSelect.Usuarios}
                onChange={handleChange}
              />
              <br />

              <label>Email</label>
              <input
                className="form-control"
                type="text"
                name="Email"
                value={UsrSelect && UsrSelect.Email}
                onChange={handleChange}
              />
              <br />

              <label>Roles</label>
              <input
                className="form-control"
                type="text"
                name="Roles"
                value={UsrSelect && UsrSelect.Roles}
                onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => editar()}>
              Actualizar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setModalEditar(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalEliminar}>
          <ModalBody>
            Estás Seguro que deseas eliminar el Usuario{" "}
            {UsrSelect && UsrSelect.Usuarios}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => eliminar()}>
              Sí
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setModalEliminar(false)}
            >
              No
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Usuario</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>ID</label>
              <input
                className="form-control"
                readOnly
                type="text"
                name="id"
                value={data[data.length - 1].id + 1}
              />
              <br />

              <label>Usuario</label>
              <input
                className="form-control"
                type="text"
                name="Usuarios"
                value={UsrSelect ? UsrSelect.Usuarios : ""}
                onChange={handleChange}
              />
              <br />

              <label>Email</label>
              <input
                className="form-control"
                type="text"
                name="Email"
                value={UsrSelect ? UsrSelect.Email : ""}
                onChange={handleChange}
              />
              <br />

              <label>Roles</label>
              <select
                className="form-control"
                type="text"
                name="Roles"
                value={UsrSelect ? UsrSelect.Roles : ""}
                onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => insertar()}>
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
      </div>
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-left"
        style={{ marginTop: "53px" }}
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

export default Users;
