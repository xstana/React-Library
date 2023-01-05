import React from "react";
import { Table, Row, Col, Button, Jumbotron } from "reactstrap";

const Tablelist = () => {
  return (
    <Jumbotron>
      <h1> Book Data Base</h1>
      <Table bordered dark striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Serial Number</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publisher</th>
            <th> No of page</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  );
};
export default Tablelist;
