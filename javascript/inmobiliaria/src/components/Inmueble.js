import React from "react";
import { Col, Row } from "reactstrap";

function Inmueble(props) {
  return (
    <div className="row border">
      <div className="col-4 px-1">
        <img src={props.data.photos} alt="" />
      </div>
      <div className="col-8 px-1">
        <p>{props.data.publication_title}</p>
        <p style={{ fontSize: "12px" }}>
          {props.data.description.toLowerCase()}
        </p>
        <p>Rooms: {props.data.room_amount}</p>
        <p>Baths: {props.data.bathroom_amount}</p>
        <p>Parking: {props.data.parking_lot_amount}</p>
        <p>Type: {props.data.type.name}</p>
      </div>
    </div>
  );
}

export default Inmueble;
