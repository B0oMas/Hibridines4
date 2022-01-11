import React, {useState} from 'react';
import {View} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';

const ProductEditable = ({
  product,
  buttonText,
  onClick,
  buttonTextD,
  onClickD,
}) => {
  const [value, setValue] = useState(product.value);

  return (
    <Card>
      <Input
        label="Code"
        value={product.value}
        onChangeText={() => setValue(value)}
      />
      <Card.Divider />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {buttonText !== null && onClick !== null ? (
          <Button
            title={buttonText}
            onPress={() =>
              onClick({
                id: product.id,
                value: value,
              })
            }
          />
        ) : null}
        {buttonTextD !== null && onClickD !== null ? (
          <Button
            title={buttonTextD}
            onPress={() =>
              onClickD({
                id: product.id,
                value: value,
              })
            }
          />
        ) : null}
      </View>
    </Card>
  );
};
export default ProductEditable;
