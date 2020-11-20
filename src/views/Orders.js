import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../styles/colors';
import cartActions from '../store/ducks/Cart';

const AppText = ({ order }) => (
  <View style={{ flexDirection: 'column', paddingHorizontal: 15 }}>
    <Text style={{ color: colors.secondary, fontSize: 16 }}>
      Pedido #{order.orderNumber}
    </Text>
    <Text style={{ color: colors.gray, marginTop: 5 }}>{order.time}</Text>
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

const Orders = ({ Orders, dispatch, navigation }) => {
  React.useEffect(() => {
    dispatch(cartActions.getOrdersRequest());
  }, []);

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          {Orders.docs && Orders.docs.length > 0 ? (
            Orders.docs.map((o) => (
              <View style={{ marginBottom: 15 }} key={o._id}>
                <ListItem>
                  <AppText order={o} />
                </ListItem>
              </View>
            ))
          ) : (
            <ListItem>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                Não há pedidos ainda.
              </Text>
            </ListItem>
          )}
        </View>
      </ScrollView>
    </Screen>
  );
};

const mapStateToProps = (state) => ({
  Orders: state.Cart.ordersAlreadySent,
});

export default connect(mapStateToProps)(Orders);

const styles = StyleSheet.create({
  container: {},
  content: {
    paddingHorizontal: 20,
  },
});
