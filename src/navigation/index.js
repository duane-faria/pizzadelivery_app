import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../views/Login';
import Register from '../views/Register';
import Flavor from '../views/Flavor';
import colors from '../styles/colors';
import Menu from '../views/Menu';
import Orders from '../views/Orders';
import ShoppingCart from '../views/ShoppingCart';
import RequestOrder from '../views/RequestOrder';
import Size from '../views/Size';

const Stack = createStackNavigator();

const Navigator = ({ Auth, Cart }) => {
  const logged = Auth.token.length > 0;
  let total = 0;
  Cart.orders.map((i) => (total += i.price));

  return (
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
          headerTransparent: true,

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
            <View style={{ position: 'relative' }}>
              {total > 0 && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#ffff9e',
                    position: 'absolute',
                    zIndex: 5,
                    right: 25,
                    top: 0,
                    borderRadius: 10 / 2,
                  }}
                />
              )}
              <TouchableOpacity
                style={[styles.shoppingCart, { zIndex: -1 }]}
                onPress={() => navigation.navigate('ShoppingCart')}>
                <Icon name="shopping-outline" size={22} color="#fff" />
              </TouchableOpacity>
            </View>
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
          headerRight: () => <Text style={styles.totalPrice}>R$ {total}</Text>,
          headerLeft: null,
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
      <Stack.Screen
        name="Size"
        component={Size}
        options={{
          title: 'Tamanho',
          headerTransparent: true,
          headerTintColor: colors.white,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  shoppingCart: {
    marginRight: 25,
    backgroundColor: colors.primary,
    borderRadius: 35 / 2,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 3,
    // zIndex: 1,
    position: 'relative',
  },
  totalPrice: {
    color: colors.white,
    fontSize: 18,
    marginRight: 20,
    fontWeight: 'bold',
  },
  refresh: {
    marginLeft: 25,
  },
});

const mapStateToProps = (state) => ({
  Auth: state.Auth,
  Cart: state.Cart,
});

connect.propTypes = {
  Auth: PropTypes.shape({
    token: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps)(Navigator);
