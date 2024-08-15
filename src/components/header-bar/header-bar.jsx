import logo from "../../../public/img/logo.svg";
import "./header-bar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { UserProfile } from "./user-profile/user-profile";
import {FiltersPanel} from "./filters-panel/filters-panel"

export const HeaderBar = ({ onClick, user, setUser, setRefresh, movies, setMovies, originalMovies }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleRefresh = (event) => {
    setRefresh(prev => !prev);
  };

  useEffect(() => {
  }, [user]);

  return (
    <>
      <Navbar
        className="header-bar"
        style={{ backgroundColor: "rgb(173, 14, 14)" }}
      >
        <Container>
          <Navbar.Brand style={{ color: "#ffd700" }}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            myMovies
          </Navbar.Brand>
          <FiltersPanel 
          movies={movies}
          handleRefresh={handleRefresh}
          setMovies={setMovies}
          originalMovies={originalMovies}
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ color: "#ffd700" }}
            className="justify-content-end"
          >
            <Nav className="ms-auto">
              <NavDropdown
                className="dropdown-title"
                title={user.Username}
                id="basic-nav-dropdown"
                style={{ textAlign: "center" }}
              >
                <Container style={{ height: "100%" }}>
                  
                  <Row style={{ height: "75%" }}>
                    <UserProfile style={{width: "100%"}}
                      show={showEdit}
                      setShow={setShowEdit}
                      user={user}
                      onRefresh={handleRefresh}
                      setUser={setUser}
                    />
                  </Row>
                  <Row
                    className="d-flex justify-content-center"
                    style={{ height: "25%" }}
                  >
                    <Button
                      className="button-generic"
                      onClick={onClick}
                      style={{ width: "75%" }}
                    >
                      Logout
                    </Button>
                  </Row>
                </Container>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
