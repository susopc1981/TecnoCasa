import React from "react";
import { Col, Row } from "reactstrap";

function Inmueble(props) {
  return (
    <Row className="border">
      <Col xs="4">
        <img src={props.data.photos} alt="" />
      </Col>
      <Col xs="8">
        <p>{props.data.publication_title}</p>
        <p>{props.data.description}</p>
        <p>Rooms: {props.data.room_amount}</p>
        <p>Baths: {props.data.bathroom_amount}</p>
        <p>Parking: {props.data.parking_lot_amount}</p>
        <p>Type: {props.data.type.name}</p>
      </Col>
    </Row>
  );
}

export default Inmueble;
