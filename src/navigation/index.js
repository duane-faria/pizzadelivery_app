import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../views/Login';
import Register from '../views/Register';
import Flavor from '../views/Flavor';
import colors from '../styles/colors';
import Menu from '../views/Menu';
import Orders from '../views/Orders';
import ShoppingCart from '../views/ShoppingCart';
import RequestOrder from '../views/RequestOrder';

const Stack = createStackNavigator();

const Navigator = ({ logged = false }) => (
  <Stack.Navigator initialRouteName={logged ? 'Menu' : 'Login'}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
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
    <Stack.Screen
      name="Menu"
      component={Menu}
      options={({ navigation }) => ({
        title: 'Pizza Delivery',
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerLeft: () => (
          <TouchableOpacity
            style={styles.refresh}
            onPress={() => navigation.navigate('Orders')}>
            <Icon name="refresh" size={24} color="#fff" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={styles.shoppingCart}
            onPress={() => navigation.navigate('ShoppingCart')}>
            <Icon name="shopping-outline" size={22} color="#fff" />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Orders"
      component={Orders}
      options={{
        title: 'Meus pedidos',
        headerTransparent: true,
        headerTintColor: colors.white,
      }}
    />
    <Stack.Screen
      name="ShoppingCart"
      component={ShoppingCart}
      options={{
        title: 'Carrinho',
        headerTransparent: true,
        headerTintColor: colors.white,
      }}
    />
    <Stack.Screen
      name="RequestOrder"
      component={RequestOrder}
      options={{
        title: 'Realizar pedido',
        headerTransparent: true,
        headerTintColor: colors.white,
      }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  shoppingCart: {
    marginRight: 25,
    backgroundColor: colors.primary,
    borderRadius: 35 / 2,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  refresh: {
    marginLeft: 25,
  },
});

export default Navigator;
