import React from "react";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Row,
  Col,
  Button
} from "reactstrap";

const Bookentry = () => {
  return (
    <div className="jumbotron jumbotron-dark">
      <center>
        <h1>New Book Entry</h1>
      </center>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Book Name</InputGroupAddon>
        <Input placeholder="spiderman" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Author</InputGroupAddon>
        <Input placeholder="Stan Lee" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Publisher</InputGroupAddon>
        <Input placeholder="spider" />
      </InputGroup>
      <br />
      <Row>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">No of page</InputGroupAddon>
            <Input placeholder="" />
          </InputGroup>
          <br />
        </Col>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Serial no</InputGroupAddon>
            <Input placeholder="" />
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Button color="danger" block>
        {" "}
        Add{" "}
      </Button>
      <br />
    </div>
  );
};

export default Bookentry;
