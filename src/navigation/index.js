import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../views/Login';
import Register from '../views/Register';
import Flavor from '../views/Flavor';
import colors from '../styles/colors';

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator initialRouteName="Flavor">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Flavor"
      component={Flavor}
      options={{
        title: 'Selecione um tipo',
        headerStyle: {
          backgroundColor: colors.secondary,
          elevation: 0,
        },
        headerTintColor: colors.white,
      }}
    />
  </Stack.Navigator>
);

export default Navigator;
