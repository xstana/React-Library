import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Kitapgiris from "./Kitapgiris";
import Tablelist from "./Tablelist";

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Kitapgiris />
        </Col>

        <Col>
          <Tablelist />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
