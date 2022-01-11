import React from 'react';
import {SafeAreaView, ScrollView, Alert} from 'react-native';

import ProductEditable from '../components/ProductEditable';
import {useProductList} from '../hooks/useProductList';

const AddProductScreen = ({route, navigation}) => {
  const {value,id} = route.params.product;

  const productHook = useProductList();

  const callback = product => {
    productHook.addProduct(
      product.value,
      product.title,
      product.description,
      product.price,
      id
    );

    Alert.alert(
      "Product Added",
      "Product was succesfuly added, pres Done",
      [
        {
          text: "Done",
          onPress: () => navigation.popToTop()
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
            title: '',
            description: '',
            price: '',
          }}
          buttonText="Add product"
          onClick={callback}
          buttonTextD={null}
          onClickD={null}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddProductScreen;
