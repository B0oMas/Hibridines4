import React from 'react';
import {SafeAreaView, ScrollView, Alert} from 'react-native';

import ProductEditable from '../components/ProductEditable';
import {useProductList} from '../hooks/useProductList';

const AddProductScreen = ({route, navigation}) => {
  const productHook = useProductList();

  const {value} = route.params;

  const callback = product => {
    productHook.addBarcode(
      product.value,
    );

    Alert.alert(
      "Barcode Added",
      "Barcode was succesfuly added, pres Done",
      [
        {
          text: "Done",
          onPress: () => navigation.navigate("camera")
        }
      ]
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ProductEditable
          product={{
            value: value,
          }}
          buttonText="Add barcode"
          onClick={callback}
          buttonTextD={null}
          onClickD={null}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddProductScreen;
