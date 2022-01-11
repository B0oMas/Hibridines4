import React from 'react';
import {Card, Button} from 'react-native-elements';

const Barcode = ({product, buttonTitle, onClick}) => {
  console.log(product);
  console.log(buttonTitle);
  return (
    <Card>
      <Card.Title>{product.value}</Card.Title>
      <Card.Divider />
      <Button
        title={buttonTitle}
        onPress={() =>
          onClick({
            id: product.id,
            value: product.value,
          })
        }
      /> 
    </Card>
  );
};
export default Barcode;
