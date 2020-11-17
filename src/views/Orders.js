import React from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../styles/colors';
import authActions from '../store/ducks/Auth';
import cartActions from '../store/ducks/Cart';

const AppText = () => (
  <View style={{ flexDirection: 'column', paddingHorizontal: 15 }}>
    <Text style={{ color: colors.secondary, fontSize: 16 }}>Pedido #3</Text>
    <Text style={{ color: colors.gray, marginTop: 5 }}>Ontem às 17h</Text>
    <Text
      style={{
        color: colors.secondary,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      }}>
      R$42,00
    </Text>
  </View>
);

const Orders = ({ dispatch, navigation }) => (
  <Screen style={styles.container}>
    <View style={styles.content}>
      <ListItem Text={AppText} style={{ marginBottom: 15 }} />
      <ListItem Text={AppText} />
    </View>
    <TouchableOpacity
      onPress={() => {
        dispatch(authActions.logout());
        dispatch(cartActions.clearCart());
        navigation.navigate('Login');
      }}>
      <Text>Sair</Text>
    </TouchableOpacity>
  </Screen>
);

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

export default connect(mapStateToProps)(Orders);

const styles = StyleSheet.create({
  container: {
    // paddingTop: 90,
  },
  content: {
    paddingHorizontal: 20,
  },
});
