import React from "react";
import { Table, Row, Col, Button, Jumbotron } from "reactstrap";

const Tablelist = () => {
  return (
    <Jumbotron>
      <h1> Kitap Veritabanı</h1>
      <Table bordered dark striped>
        <thead>
          <tr>
            <th>#</th>
            <th>ISBN</th>
            <th>Kitap adı</th>
            <th>Yazar</th>
            <th>Yayınevi</th>
            <th>Sayfa Sayısı</th>
            <th>Düzenle</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>0000000719285</td>
            <td>Seninle Başlamadı</td>
            <td> Mark Wolynn </td>
            <td> Sola Unitas </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>0001922926001</td>
            <td>Gece Yarısı Kütüphanesi</td>
            <td>Matt Haig </td>
            <td> Domingo Yayınevi </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>0001957979001</td>
            <td>Sırlarımız Kadar Hastayız</td>
            <td>Bülent Demircioğlu </td>
            <td> Destek Yayınları</td>
          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  );
};
export default Tablelist;
