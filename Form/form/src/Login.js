import React from "react";
import "./AnuncioContainer.css";
import logo from "../src/img/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import GoogleLogin from "react-google-login";
import {
  Button,
  Container,
  Navbar,
  Row,
  Col,
  Image,
  Card,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import {useNavigate} from "react-router-dom";

import { MDBFooter } from "mdb-react-ui-kit";


function Login() {
  const [modalLogin, setModalLogin] = useState(false);

  const abrirModalLogin = () => {
    setModalLogin(true);
  };

  //Buttons para navigate

  //Button de Login a AdminEvent
  const navigate=useNavigate();
  const  onClickOpenCtgory = async (e)=>navigate("/Category");
  const  onClickOpenTicket = async (e)=>navigate("/TicketV");
  const  onClickOpenEvent = async (e)=>navigate("/Event");
  const  onClickOpenLogin = async (e)=>navigate("/Login");
  const  onClickOpenConcert = async (e)=>navigate("/Concert");
  const  onClickOpenAdminPage = async (e)=>navigate("/AdminPage");

  

  const clientID =
    "745779382020-5nu8ntbc75aue8l93mbalq4kag6gukpd.apps.googleusercontent.com";

  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
  };
  const onFailure = (response) => {
    console.log("Something went wrong");
  };
  const handleLogout = () => {
    setUser({});
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  });

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
          <Button variant="outline-danger" onClick={() => abrirModalLogin()}>
            LOGIN
          </Button>
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
          marginTop: "10px",
        }}
      >
        <h2 style={{ color: "white" }}>!BIENVENIDO A TAKETICKET!</h2>
      </Container>
      <Container>
        <div className="anuncio-container">
          <div className="anuncio-content">
            <h1>TAKETICKET</h1>
            <h3>¡No Te Pierdas Nuestros Increíbles Eventos!</h3>
          </div>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button variant="outline-danger" onClick={onClickOpenEvent}><h2 style={{ color: "white" }}>PRINCIPALES EVENTOS</h2></Button>
      </Container>
      <Container
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card style={{ width: "15rem", marginRight: "5px", height: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/474x/73/9a/de/739adeda10c11ed01db120e85dfc6ba3--goal-the-next.jpg"
          />
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Fast & Furious X
            </Card.Title>
            <Button variant="danger" style={{ justifyContent: "center" }}>
              More Info...
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem", marginLeft: "5px", height: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://i0.wp.com/foreigndjmixtapes.com/wp-content/uploads/2019/10/unnamed-file-42.jpg"
          />
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title style={{ textAlign: "center" }}>
              MARTIN GARRIX
            </Card.Title>
            <Button variant="danger" style={{ justifyContent: "center" }} onClick={onClickOpenConcert}>
              More Info...
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem", marginLeft: "5px", height: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://showmax.akamaized.net/i/21695858-4bb6-4a50-b4c5-431511d3eee7/400x"
          />
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title style={{ textAlign: "center" }}>SPIDER-MAN</Card.Title>
            <Button variant="danger" style={{ justifyContent: "center" }}>
              More Info...
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem", marginLeft: "5px" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AA71BDURHEQWs56wfkjYaLBbHZLaSHDQdw&usqp=CAU"
          />
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title style={{ textAlign: "center" }}>
              BAD BUNNY W.TOUR
            </Card.Title>
            <Button variant="danger" style={{ justifyContent: "center" }}>
              More Info...
            </Button>
          </Card.Body>
        </Card>
      </Container>
      <Container style={{ marginTop: "30px" }}>
        <div className="anuncio-container-2">
          <div className="anuncio-content">
            <h1>TAKETICKET</h1>
            <Button variant="danger" onClick={onClickOpenCtgory}> <h2>PRINCIPALES CATEGORIAS EL SALVADOR</h2></Button>
           
          </div>
        </div>
      </Container>
      <Container style={{marginTop:"10px"}}>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Row>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://www.hola.com/imagenes/es/salud-y-belleza/2019070925412/cardi-b-beauty-beauty-routine-makeup-vv/0-186-775/cardi-b1-m.jpg?filter=w400"
                        alt="Imagen 1"
                      />
                      <Card.Body>
                        <Card.Title  style={{textAlign:"center"}}>HIP-HOP/RAP</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://pbs.twimg.com/profile_images/1393598479084101641/olJInnsf_400x400.jpg"
                        alt="Imagen 2"
                      />
                      <Card.Body>
                        <Card.Title  style={{textAlign:"center"}}>ELECTRONICA</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://www.usmagazine.com/wp-content/uploads/2023/06/ariana-grande-jokingly-shades-old-makeup-habits-of-a-thick-cat-eye-and-overdrawn-lips-01.jpg?w=400&h=400&crop=1&quality=86&strip=all"
                        alt="Imagen 3"
                      />
                      <Card.Body>
                        <Card.Title  style={{textAlign:"center"}}>POP</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://redgol.cl/__export/1606409877667/sites/redgol/img/2020/11/26/bad-bunny-el-ultimo-tour-del-mundo_crop1606408883079.png_1216690859.png"
                        alt="Imagen 4"
                      />
                      <Card.Body>
                        <Card.Title  style={{textAlign:"center"}}>REGUETON</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://www.passline.com/imagenes/eventos/grupo-frontera-en-paraguay-179013-rec_1.jpg"
                        alt="Imagen 5"
                      />
                      <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>BANDA/MX</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
  
      <MDBFooter bgColor="dark" className="text-center text-lg-left" style={{marginTop:"30px"}}>
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
      <Modal isOpen={modalLogin} style={{ marginTop: "100px", maxWidth:"700px"}}>
        <ModalHeader style={{ justifyContent: "center" }}>
          <div>
            <h3 style={{ textAlign: "center" }}>INICIO DE SESION</h3>
          </div>
         
        </ModalHeader>

        <ModalBody style={{ justifyContent: "center" }}>
  <div style={{ display: "flex" }}>
    <div style={{ width: "100%" }}>
      {/* Contenido de la parte izquierda del ModalBody */}
      <img
            src={logo}
            width="250"
            height="250"
          ></img>
    </div>
    <div style={{ width: "100%" }}>
      {/* Contenido de la parte derecha del ModalBody */}
      <div className="form-group text-sm text-black" >
            <label> <b>Correo / nombre de usuario</b></label>
            <input
              className="form-control"
              type="email"
              required
              style={{ color: "gray" }}
            />
            <br />

            <label><b>Contraseña</b></label>
            <input
              className="form-control"
              type="password"
              required
              style={{ color: "gray" }}
            />
            <span style={{color:"gray", textDecoration:"underline", padding:"4px" }} className="text-xs text-gray-800 hover:underline">¿Contraseña olvidada?</span>
            <br />
            
            <div className="place-content-center flex jusyify-center text-center">
            <label style={{ marginRight: "10px", marginTop: "10px" }}>---------- O inicie sesion con ----------</label>
            </div>
           <div className="place-content-center flex mt-2 gap-x-2 jusyify-center text-center">
            <GoogleLogin
                            clientId={clientID}
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            /**buttonText="Continuar con Google"*/
                            render={renderProps => (
                                <button class="flex items-center justify-center px-8 p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#ef1347]"
                                    onClick={renderProps.onClick} disabled={renderProps.disabled}>

                                    <svg width="25px" height="25px" viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none">
                                        <path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z" />
                                        <path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z" />
                                        <path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z" />
                                        <path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z" />
                                    </svg>

                                </button>
                            )}
                            cookiePolicy={"single_host_origin"}
                        />
            <br />
            </div>
          </div>

          
    </div>
  </div>
</ModalBody>
        
        <ModalFooter style={{ justifyContent: "center", textDecorationColor:"gray" }}>
        <button 
            className="btn btn-success w-full px-4 py-2 tracking-wide text-white transition-colors
             duration-200 transform rounded-md focus:outline-none jusyify-center text-center align-center
             relative flex items-center justify-center place-content-center  flex mt-2 gap-x-2"
            onClick={onClickOpenAdminPage}
          >
            Iniciar sesion
          </button>

          <button
            className="btn btn-danger w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md focus:outline-none"
            onClick={() => setModalLogin(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Login;
