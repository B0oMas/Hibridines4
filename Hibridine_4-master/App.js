import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import CameraScreen from './src/screens/CameraScreen';
import AddBarcodeScreen from './src/screens/AddBarcodeScreen';
import FoundProductScreen from './src/screens/FoundProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="found"
        component={FoundProductScreen}
        options={{title: 'Product Found'}}
      />
       <Stack.Screen
        name="add"
        component={AddBarcodeScreen}
        options={{title: 'Add Barcode'}}
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
            name="camera"
            component={CameraScreen}
            options={{
              title: 'Recognition',
              tabBarIcon: ({color, size}) => (
                <Icon name="camera" color={color} size={size}/>
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
