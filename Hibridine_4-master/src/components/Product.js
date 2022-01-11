import React from 'react';
import {Text, Card} from 'react-native-elements';

const Product = ({product, buttonTitle}) => {
  console.log(product);
  console.log(buttonTitle);
  return (
    <Card>
      <Card.Title>{product.title}</Card.Title>
      <Card.Divider />
      <Text>{product.description}</Text>
      <Card.Divider />
      <Text>Price: {product.price}</Text>
      <Card.Divider />
      <Text>Code: {product.value}</Text>
      <Card.Divider />
    </Card>
  );
};
export default Product;
