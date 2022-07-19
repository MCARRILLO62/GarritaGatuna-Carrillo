import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { name, image, price, id } = item;

  return (
    <div className="p-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ maxHeight: "286px" }} variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{ fontSize: "0.9em" }}>{name}</Card.Title>
          <Card.Text>S/ {price}</Card.Text>
          <Link to={`/detalle/${id}`}>
            <Button variant="success">Detalle del producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
