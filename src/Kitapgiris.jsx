import React from "react";
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Row,
  Col,
  Button
} from "reactstrap";

const Kitapgiris = () => {
  return (
    <div className="jumbotron jumbotron-dark">
      <center>
        <h1>Yeni Kitap</h1>
      </center>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Kitap Adı</InputGroupAddon>
        <Input placeholder="Spider Man 2" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Yazar</InputGroupAddon>
        <Input placeholder="Stan Lee" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Yayın Evi</InputGroupAddon>
        <Input placeholder="Epsilon" />
      </InputGroup>
      <br />
      <Row>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Sayfa Sayısı</InputGroupAddon>
            <Input placeholder="356" />
          </InputGroup>
          <br />
        </Col>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Seri Numarası</InputGroupAddon>
            <Input placeholder="13 hane " />
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Button color="danger" block>
        {" "}
        Ekle{" "}
      </Button>
      <br />
    </div>
  );
};

export default Kitapgiris;
