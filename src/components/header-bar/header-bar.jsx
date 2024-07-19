import logo from "../../../public/img/logo.svg";
import "./header-bar.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap";



export const HeaderBar = ({onClick, user}) => {

console.log({user});

  return (
    <>
      <Navbar classname="header-bar" style={{backgroundColor: "rgb(173, 14, 14)"}}>
        <Container >
          <Navbar.Brand   style={{color: "#ffd700"}}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            myMovies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{color:"#ffd700"}} className="justify-content-end">
          <Nav className="ms-auto">
            <NavDropdown className="dropdown-title" title={user} id="basic-nav-dropdown" >
            <Col>
              <Row className="d-flex justify-content-center">
                <Button className="button-generic" onClick={onClick} style={{width: "75%"}}>Logout</Button>
            </Row >
            </Col>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
