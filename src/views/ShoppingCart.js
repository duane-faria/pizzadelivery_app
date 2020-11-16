import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../styles/colors';
import cartActions from '../store/ducks/Cart';

const images = {
  portuguesa: require('../assets/images/portuguesa.png'),
  pepperoni: require('../assets/images/pepperoni.png'),
  atum: require('../assets/images/atum.png'),
  brocolis: require('../assets/images/brocolis.png'),
  queijo: require('../assets/images/queijo.png'),
  calabresa: require('../assets/images/calabresa.png'),
};

function AppImage({ url }) {
  return <Image source={url} style={{ height: 90, width: 100 }} />;
}

function AppText({ flavor, price, size, remove }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 10,
        flexShrink: 1,
        alignItems: 'center',
      }}>
      <View style={{ flexDirection: 'column', width: 180 }}>
        <Text style={{ color: colors.secondary, fontSize: 16 }}>
          Pizza {flavor}
        </Text>
        <Text style={{ color: colors.gray, marginTop: 5 }}>
          Tamanho: {size}
        </Text>
        <Text
          style={{
            color: colors.secondary,
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          {price}
        </Text>
      </View>
      <TouchableOpacity style={{ width: 40 }} onPress={remove}>
        <Icon
          name="trash-can-outline"
          size={25}
          color={colors.primary}
          style={{ marginRight: 5, marginLeft: -2 }}
        />
      </TouchableOpacity>
    </View>
  );
}
const ShoppingCart = ({ Cart, dispatch, navigation }) => {
  React.useState(() => {
    console.log(Cart, 'shopping cart');
  }, [Cart]);
  return (
    <Screen>
      <View style={styles.content}>
        {Cart.orders.map((o) => (
          <ListItem>
            <AppImage url={images[o.flavorName.toLowerCase()]} />
            <AppText
              remove={() => dispatch()}
              flavor={o.flavorName}
              size={o.sizeName}
              price={o.price}
            />
          </ListItem>
        ))}
        <View style={{ width: '100%', marginTop: 25, alignItems: 'flex-end' }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              width: 150,
              height: 35,
              borderRadius: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 15,
            }}
            onPress={() => navigation.navigate('RequestOrder')}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 12,
                color: colors.white,
              }}>
              Finalizar pedido
            </Text>
            <Arrow
              name="keyboard-arrow-right"
              size={25}
              color={colors.white}
              style={{ marginRight: 5, marginLeft: -2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const mapStateToProps = (state) => ({
  Cart: state.Cart,
});

export default connect(mapStateToProps)(ShoppingCart);
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 15,
  },
});
