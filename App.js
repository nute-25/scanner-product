import React from 'react';
import { Icon } from 'react-native-elements';
import { StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ScanView from './src/views/ScanView';
import ProductsView from './src/views/ProductsView';
import HistoryView from './src/views/HistoryView';
import DetailsView from './src/views/DetailsView';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const productStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductsView} />
      <Stack.Screen name="Details" component={DetailsView} />
    </Stack.Navigator>
  );
};
const historyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={HistoryView} />
      <Stack.Screen name="Details" component={DetailsView} />
    </Stack.Navigator>
  );
};
const scanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scan" component={ScanView} />
      <Stack.Screen name="Details" component={DetailsView} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator>
        <Tab.Screen name="Scan" component={scanStack} options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: () => <Icon name="barcode-scan" type="material-community" />
        }} />
        <Tab.Screen name="Products" component={productStack} options={{
          tabBarLabel: 'Pizza',
          tabBarIcon: () => <Icon name="pizza-slice" type="font-awesome-5" />
        }} />
        <Tab.Screen name="History" component={historyStack} options={{
          tabBarLabel: 'History',
          tabBarIcon: () => <Icon name="history" type="font-awesome-5" />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


