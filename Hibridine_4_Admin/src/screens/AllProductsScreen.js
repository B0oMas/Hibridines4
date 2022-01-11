import React from 'react';
 import {SafeAreaView, FlatList} from 'react-native';
 
 import {useProductList} from '../hooks/useProductList';
 import Product from '../components/Product';
 
 const AllProductScreen = ({navigation}) => {
   const productHook = useProductList();

   const callback = product => {
     navigation.navigate('update', {product: product});
   };
 
   const renderItem = ({item}) => (
     <Product
       product={{
         id: item.id,
         value: item.value,
         title: item.title,
         description: item.description,
         price: item.price,
       }}
       buttonTitle="Update Product"
       onClick={(item) => callback(item)}
     />
   );
 
   return (
     <SafeAreaView>
       <FlatList
         data={productHook.productList}
         renderItem={renderItem}
         keyExtractor={item => item.id}
       />
     </SafeAreaView>
   );
 };
 export default AllProductScreen;
 