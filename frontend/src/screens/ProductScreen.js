import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return <div>{product.name}</div>;
};

export default ProductScreen;
