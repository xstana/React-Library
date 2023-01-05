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
        <h1>Yeni Kitap</h1>
      </center>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Kitap Adı</InputGroupAddon>
        <Input placeholder="spiderman" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Yazar</InputGroupAddon>
        <Input placeholder="Stan Lee" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Yayın Evi</InputGroupAddon>
        <Input placeholder="spider" />
      </InputGroup>
      <br />
      <Row>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Sayfa Sayısı</InputGroupAddon>
            <Input placeholder="" />
          </InputGroup>
          <br />
        </Col>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Seri Numarası</InputGroupAddon>
            <Input placeholder="" />
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

export default Bookentry;
