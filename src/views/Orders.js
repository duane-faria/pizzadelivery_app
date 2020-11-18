import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../styles/colors';
import authActions from '../store/ducks/Auth';
import cartActions from '../store/ducks/Cart';

const AppText = ({ order }) => (
  <View style={{ flexDirection: 'column', paddingHorizontal: 15 }}>
    <Text style={{ color: colors.secondary, fontSize: 16 }}>
      Pedido #{order.orderNumber}
    </Text>
    <Text style={{ color: colors.gray, marginTop: 5 }}>Ontem às 17h</Text>
    <Text
      style={{
        color: colors.secondary,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      }}>
      R${order.price}
    </Text>
  </View>
);

const Orders = ({ Auth, Orders, dispatch, navigation }) => {
  React.useEffect(() => {
    dispatch(cartActions.getOrdersRequest(Auth.id));
  }, []);

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          {/* <ListItem Text={AppText} style={{ marginBottom: 15 }} /> */}
          {/* <ListItem Text={AppText} /> */}
          {Orders.docs &&
            Orders.docs.map((o) => (
              <View style={{ marginBottom: 15 }}>
                <ListItem>
                  <AppText order={o} />
                </ListItem>
              </View>
            ))}
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(authActions.logout());
            dispatch(cartActions.clearCart());
            navigation.navigate('Login');
          }}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
};

const mapStateToProps = (state) => ({
  Auth: state.Auth,
  Orders: state.Cart.ordersAlreadySent,
});

export default connect(mapStateToProps)(Orders);

const styles = StyleSheet.create({
  container: {},
  content: {
    paddingHorizontal: 20,
  },
});
