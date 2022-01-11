import {useRecoilState} from 'recoil';
import {productListState} from '../atoms/productListState';
import firestore from '@react-native-firebase/firestore';

const produtsCollection = firestore().collection('products');
const barcodeCollection = firestore().collection('barcode');


export const useProductList = () => {
  const [productList, setProductList] = useRecoilState(productListState);

  async function addBarcode(value) {
    await barcodeCollection.add({
      value: value,
    });
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

  function productExists(value) {
    const list = productList.filter(item => item.value === value);
    if (list.length == 0) {
      return null;
    } else {
      return list[0];
    }
  }

  return {
    productList,
    addBarcode,
    refreshList,
    productExists,
  };
};
