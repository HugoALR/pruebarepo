import "./App.css";
import { useNavigate } from "react-router-dom";
import logo from "../src/img/logo.png";
import {Button,Container,Form,Navbar,Row,Col,InputGroup,Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {TfiCrown,TfiMarkerAlt,TfiMenu,TfiPin2,TfiIdBadge,TfiMapAlt,TfiGallery,TfiArrowCircleDown,TfiLocationPin,TfiCalendar,} from "react-icons/tfi";
import {
  MDBFooter
} from "mdb-react-ui-kit";

function EventCreator() {

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
      <Container>
        <h1
          style={{ textAlign: "center", color: "white", marginBottom: "50px" }}
        >
          Event Creator
        </h1>
      </Container>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formEventName">
              <TfiCrown style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>Event Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Event Name"
                style={{ borderColor: "crimson", borderWidth: "3" }}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <TfiMarkerAlt style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>
                Event Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Insert Event Description"
                style={{ borderColor: "crimson", borderWidth: "3" }}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <TfiMenu style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>Category Event</Form.Label>
              <Form.Select
                defaultValue="Choose Category"
                style={{ borderColor: "crimson", borderWidth: "3" }}
              >
                <option>Choose Category</option>
                <option>Family</option>
                <option>Teenagers</option>
                <option>+16 Accompanied by an adult</option>
                <option>+18</option>
                <option>21+</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <TfiPin2 style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>Localidades</Form.Label>
              <Form.Select
                defaultValue="Choose Location"
                style={{ borderColor: "crimson", borderWidth: "3" }}
              >
                <option>Choose Location</option>
                <option>General</option>
                <option>Platinum</option>
                <option>VIP</option>
                <option>ULTRA</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <TfiIdBadge style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>Sponsor</Form.Label>
              <Form.Select
                defaultValue="Choose Sponsor"
                style={{ borderColor: "crimson", borderWidth: "3" }}
              >
                <option>Choose Sponsor</option>
                <option>Coca Cola</option>
                <option>Corona</option>
                <option>Burger King</option>
                <option>Pizza Hut</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-1">
            <Form.Group as={Col} controlId="formEventName">
              <TfiMapAlt style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>Department</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                style={{ borderColor: "crimson", borderWidth: "3" }}
              >
                <option>Choose...</option>
                <option>San Salvador</option>
                <option>San Miguel</option>
                <option>Santa Ana</option>
                <option>La Union</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <TfiLocationPin style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>
                Stadium,Court,Etc
              </Form.Label>
              <Form.Select
                defaultValue="Choose..."
                style={{ borderColor: "crimson", borderWidth: "3" }}
              >
                <option>Choose...</option>
                <option>Cuscatlan Stadium</option>
                <option>La Hacienda Court</option>
                <option>Magico Gonzales Stadium</option>
                <option>MUNA</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <TfiLocationPin style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>Genre</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                style={{ borderColor: "crimson", borderWidth: "3" }}
              >
                <option>Choose...</option>
                <option>Theather</option>
                <option>Music</option>
                <option>Sports</option>
                <option>Cinema</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formFileMultiple" className="mb-3">
              <TfiGallery style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>Photos Event</Form.Label>
              <Form.Control
                type="file"
                multiple
                style={{ borderColor: "crimson", borderWidth: "3" }}
              />
            </Form.Group>

            <Form as={Col} className="mb-3">
              <TfiCalendar style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>Date</Form.Label>
              <Form.Control
                type="date"
                multiple
                style={{ borderColor: "crimson", borderWidth: "3" }}
              />
            </Form>

            <Form.Group as={Col} className="mb-3">
              <TfiArrowCircleDown
                style={{ marginRight: "5", color: "white" }}
              />
              <Form.Label style={{ color: "white" }}>Time</Form.Label>
              <Form.Control
                type="time"
                multiple
                style={{ borderColor: "crimson", borderWidth: "3" }}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formFileMultiple" className="mb-2">
              <TfiGallery style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>
                Insert Locations
              </Form.Label>
              <Form.Control
                type="input"
                placeholder="VIP,PLATINUM,ETC"
                multiple
                style={{
                  borderColor: "crimson",
                  borderWidth: "3",
                  marginBottom: "3px",
                }}
              />
              <TfiGallery style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>
                Price in USD $$
              </Form.Label>
              <InputGroup>
                <InputGroup.Text id="btnGroupAddon">$</InputGroup.Text>
                <Form.Control
                  type="number"
                  min={"0"}
                  step={"0.1"}
                  placeholder="Insert Price $150, $200, $250"
                  style={{
                    borderColor: "crimson",
                  }}
                />
              </InputGroup>

              <TfiGallery style={{ marginRight: "5", color: "white" }} />
              <Form.Label style={{ color: "white" }}>
                Number of tickets in location
              </Form.Label>
              <InputGroup>
                <InputGroup.Text id="btnGroupAddon">#</InputGroup.Text>
                <Form.Control
                  type="number"
                  min={"0"}
                  placeholder="Insert tickets Quantity 200TKT,300TKT,100TKT"
                  style={{
                    borderColor: "crimson",
                  }}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formFileMultiple" className="mb-2">
              <Form.Label>Locations </Form.Label>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name Event</th>
                    <th>Locations</th>
                    <th>Prices</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>BAD BUNNY WORLD TOUR</td>
                    <td>ULTRA</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>BAD BUNNY WORLD TOUR</td>
                    <td>VIP</td>
                    <td>$75</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>BAD BUNNY WORLD TOUR</td>
                    <td>GENERAL</td>
                    <td>$30</td>
                  </tr>
                </tbody>
              </Table>
            </Form.Group>
          </Row>

          <Container style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop:"20px",
            gap: "10px",}}>
            <Button variant="success" type="submit" size="lg">
              SAVE EVENT
            </Button>
          </Container>
        </Form>
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
    </>
  );
}

export default EventCreator;
