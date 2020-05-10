import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import concept from './src/Components/concept';
import Login from './src/Components/login';
import storeList from './src/Components/storeList';
import searchList from './src/Components/searchList';
import splash from './src/Components/splash';
import itemDetail from './src/Components/itemDetail';

import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={splash}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="concept"
        component={concept}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="storeList"
        component={storeList}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="searchList"
        component={searchList}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="itemDetail"
        component={itemDetail}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
