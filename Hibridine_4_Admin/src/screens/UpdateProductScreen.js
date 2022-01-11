import React from 'react';
import {SafeAreaView, ScrollView, Alert} from 'react-native';

import ProductEditable from '../components/ProductEditable';
import {useProductList} from '../hooks/useProductList';

const UpdateProductScreen = ({route, navigation}) => {
  const {product} = route.params;
  const productHook = useProductList();

  const callback = product => {
    console.log('pasiekia callback');
    console.log(product);
    productHook.removeProduct(product.id);

    Alert.alert(
      "Product Succesfully Removed",
      "Product was succesfuly removed, press Done",
      [
        {
          text: "Done",
          onPress: () => navigation.popToTop()
        }
      ]
    );
  };

  const callbackD = product => {
    productHook.modifyProduct(product);

    Alert.alert(
      "Product Updated",
      "Product was succesfuly updated",
      [
        {
          text: "Done",
          onPress: () => navigation.popToTop()
        },
        {
          text: "Continue",
          onPress: () => console.log("continue")
        },
      ]
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ProductEditable
          product={product}
          buttonText="Delete"
          onClick={callback}
          buttonTextD="Update"
          onClickD={callbackD}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default UpdateProductScreen;
