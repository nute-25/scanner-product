import React from 'react';
import { Icon } from 'react-native-elements';
import { StatusBar } from "react-native";

import { createStore } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ScanContainer from './src/container/ScanContainer';
import ProductsView from './src/views/ProductsView';
import HistoryContainer from './src/container/HistoryContainer';
import FavoriteContainer from './src/container/FavoriteContainer';
import DetailsContainer from './src/container/DetailsContainer';


const store = createStore(rootReducer);
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NavigatorStack =  ({name, component}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={name} component={component} />
      <Stack.Screen name="Details" component={DetailsContainer} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <Tab.Navigator>

          <Tab.Screen
            name="Scan"
            options={{
              tabBarLabel: 'Scanner',
              tabBarIcon: () => <Icon name="barcode-scan" type="material-community" />
            }}
          >
            {props => <NavigatorStack {...props} name={'Scan'} component={ScanContainer}/>}
          </Tab.Screen>

          <Tab.Screen
            name="Products"
            options={{
              tabBarLabel: 'Pizza',
              tabBarIcon: () => <Icon name="pizza-slice" type="font-awesome-5" />
            }}
          >
            {props => <NavigatorStack {...props} name={'Pizza'} component={ProductsView}/>}
          </Tab.Screen>

          <Tab.Screen
            name="History"
            options={{
              tabBarLabel: 'Historique',
              tabBarIcon: () => <Icon name="history" type="font-awesome-5" />
            }}
          >
            {props => <NavigatorStack {...props} name={'Historique'} component={HistoryContainer}/>}
          </Tab.Screen>

          <Tab.Screen
            name="Favorite"
            options={{
              tabBarLabel: 'Favoris',
              tabBarIcon: () => <Icon name="favorite" type="material" />
            }} 
          >
            {props => <NavigatorStack {...props} name={'Favoris'} component={FavoriteContainer}/>}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


