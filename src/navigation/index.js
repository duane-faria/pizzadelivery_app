import React from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../views/Login';
import Register from '../views/Register';
import Flavor from '../views/Flavor';
import colors from '../styles/colors';
import Menu from '../views/Menu';
import Orders from '../views/Orders';
import ShoppingCart from '../views/ShoppingCart';

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator initialRouteName="ShoppingCart">
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
    <Stack.Screen
      name="Menu"
      component={Menu}
      options={{
        title: 'Pizza Delivery',
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerLeft: () => (
          <TouchableOpacity
            style={styles.refresh}
            onPress={() => Alert.alert('atualizar')}>
            <Icon name="refresh" size={24} color="#fff" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={styles.shoppingCart}
            onPress={() => Alert.alert('carinho')}>
            <Icon name="shopping-outline" size={22} color="#fff" />
          </TouchableOpacity>
        ),
      }}
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
