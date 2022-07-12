import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = ({ item }) => {
  const { name, image, price } = item;

  return (
    <div className="p-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>S/ {price}</Card.Text>
          <Button variant="success">Ver más</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
