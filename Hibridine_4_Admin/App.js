/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import AddProductScreen from './src/screens/AddProductScreen';
import AllProductScreen from './src/screens/AllProductsScreen';
import barcodeScreenq from './src/screens/barcodeScreen';
import UpdateProductScreen from './src/screens/UpdateProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="all"
        component={AllProductScreen}
        options={{title: 'All Products'}}
      />
      <Stack.Screen
        name="add"
        component={AddProductScreen}
        options={{title: 'Add Product'}}
      />
      <Stack.Screen
        name="update"
        component={UpdateProductScreen}
        options={{title: 'Update Product'}}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator swipeEnabled={true}>
          <Tab.Screen
            name="Barcode"
            component={barcodeScreenq}
            options={{
              title: 'Barcode',
              tabBarIcon: ({color, size}) => (
                <Icon name="qrcode" color={color} size={size}/>
              ),
            }}
          />
          <Tab.Screen
            name="stack"
            component={StackScreens}
            options={{title: 'Products',
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" color={color} size={size}/>
            ),
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};
export default App;
