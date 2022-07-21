import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { name, image, price, id } = item;

  return (
    <div className="p-3">
      <Card style={{ width: "18rem", borderRadius: "5px" }}>
        <Card.Img style={{ maxHeight: "286px" }} variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{ fontSize: "0.9em" }}>{name}</Card.Title>
          <Card.Text>
            <small>Precio: </small>S/ {price}
            <small>.00</small>
          </Card.Text>
          <Link to={`/item/${id}`}>
            <Button className="button-detail">Detalle del producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
