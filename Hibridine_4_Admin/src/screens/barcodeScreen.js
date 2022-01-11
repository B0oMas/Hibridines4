import React from 'react';
import {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
 
import {useProductList} from '../hooks/useProductList';
import Barcode from '../components/Barcode';

 
 const barcodeScreen = ({navigation}) => {
   const productHook = useProductList();

   useEffect(() => {
     productHook.refreshList();
     productHook.refreshBarcodeList();
   }, []);
 
   const callback = product => {
     navigation.navigate('stack', {
        params: {product: product},
        initial: false,
        screen: 'add',
      });
   };
 
   const renderItem = ({item}) => (
     <Barcode
       product={{
         id: item.id,
         value: item.value,
       }}
       buttonTitle="Add Product"
       onClick={(item) => callback(item)}
     />
   );
 
   return (
     <SafeAreaView>
       <FlatList
         data={productHook.barcode}
         renderItem={renderItem}
         keyExtractor={item => item.id}
       />
     </SafeAreaView>
   );
 };
 export default barcodeScreen;
 