import "./user-profile.scss";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { UpdateUser, GetUser } from "../../../hooks/users";
import { useState, useEffect } from "react";

export const UserProfile = ({ show, setShow, user, onRefresh, setUser }) => {
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  useEffect(() => {
    setEmail(user.email);
    setUsername(user.username);
  }, [user]);

  const handleEditClick = () => {
    setShow(!show);
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const data = {
      Email: email,
      Username: username,
    };

    try {
      // First, update the user
      await UpdateUser(data);

      // Then, get the updated user data
      const newUserData = await GetUser();

      setUser(newUserData);
      localStorage.setItem("user", JSON.stringify(newUserData));
      onRefresh();
      setShow(false);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <Container>
      {show === false ? (
        <>
          <Card>
            <Card.Title style={{ textAlign: "center" }}>
              {user.Username}
            </Card.Title>
            <p style={{ textAlign: "center" }}>{user.Email}</p>

            <Button variant="link" onClick={handleEditClick}>
              Edit Profile
            </Button>
          </Card>
        </>
      ) : (
        <>
          <Form onSubmit={handleSave}>
            <Col md={12} sm={12} lg={12}>
              <Row style={{ height: "75%" }}>
                <Form.Group controlId="values.email">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    placeholder={user.Username}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="values.username">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={user.Email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row
                className="d-flex justify-content-center"
                style={{ height: "25%" }}
              >
                <Button
                  style={{ width: "25%", margin: "10px" }}
                  onClick={handleEditClick}
                >
                  Cancel
                </Button>
                <Button type="submit" style={{ width: "25%", margin: "10px" }}>
                  Save
                </Button>
              </Row>
            </Col>
          </Form>
        </>
      )}
    </Container>
  );
};
