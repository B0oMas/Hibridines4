import {useRecoilState} from 'recoil';
import {productListState} from '../atoms/productListState';
import firestore from '@react-native-firebase/firestore';
import { barcodeList } from '../atoms/barcodeList';

const produtsCollection = firestore().collection('products');
const barcodeCollection = firestore().collection('barcode');

export const useProductList = () => {
  const [productList, setProductList] = useRecoilState(productListState);
  const[barcode, setBarcodeList] = useRecoilState(barcodeList);

  async function addProduct(value, title, description, price,id) {
    const response = await produtsCollection.add({
      value: value,
      title: title,
      description: description,
      price: price,
    });

    setProductList(productList => [
      ...productList,
      {
        id: response.id,
        value: value,
        title: title,
        description: description,
        price: price,
      },
    ]);
    removeBarcode(id);
  }

  async function removeProduct(id) {
    await produtsCollection.doc(id).delete();
    setProductList(productList => productList.filter(item => item.id !== id));
  }

  async function removeBarcode(id) {
    await barcodeCollection.doc(id).delete();
    setBarcodeList(barcode => barcode.filter(item => item.id !== id));
  }

  async function modifyProduct(product) {
    console.log("modifyProduct: ")
    await produtsCollection.doc(product.id).update({
      value: product.value,
      title: product.title,
      description: product.description,
      price: product.price,
    });

    const index = productList.findIndex(item => item.id === product.id);
    console.log("index: " + index)
    const clone = [...productList];
    clone[index] = {
      value: product.value,
      title: product.title,
      description: product.description,
      price: product.price,
    };

    setProductList(clone);
  }

  async function refreshList() {
    const snapshot = await produtsCollection.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    const products = [];
    snapshot.forEach(doc => {
      products.push({
        ...doc.data(),
        id: doc.id,
      });
      console.log(doc.id, '=>', doc.data());
    });
    setProductList(products);
  }

  async function refreshBarcodeList() {
    const snapshot = await barcodeCollection.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    const barcodeItem = [];
    snapshot.forEach(doc => {
      barcodeItem.push({
        ...doc.data(),
        id: doc.id,
      });
      console.log(doc.id, '=>', doc.data());
    });
    
    setBarcodeList(barcodeItem);
    
  }


  return {
    productList,
    barcode,
    addProduct,
    refreshBarcodeList,
    removeProduct,
    modifyProduct,
    refreshList
  };
};
