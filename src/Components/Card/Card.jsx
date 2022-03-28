import React from "react";
import { Button, Card } from "react-bootstrap";

const Cardd = ({product}) => {
    const {name, price, img} = product
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" style={{height: '150px'}} src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
              <Card.Text>
                  <p><strong>Price:</strong> {price}tk</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Cardd;
