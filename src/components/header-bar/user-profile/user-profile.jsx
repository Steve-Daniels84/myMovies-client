import "./user-profile.scss";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";

export const UserProfile = ({ show, setShow, user }) => {
  const handleClick = () => {
    if (show === false) {
      setShow(true);
    } else if (show === true) {
      setShow(false);
    }
  };
  return (
    <Container>
      {show === false ? (
        <>
          <Card>
            <Card.Title>{user}</Card.Title>
            <Button variant="link" onClick={handleClick}>
              edit profile
            </Button>
          </Card>
        </>
      ) : (
        show === true && (
          <>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder={user}></Form.Control>
              </Form.Group>
              <Col md={12} sm={12} lg={12}>
              <Row className="d-flex justify-content-center">
                <Button style={{ width: "25%", margin: "10px" }} onClick={handleClick}>
                  Cancel
                </Button>
                <Button style={{ width: "25%", margin: "10px" }}>Save</Button>
              </Row>
              </Col>
            </Form>
          </>
        )
      )}
    </Container>
  );
};
