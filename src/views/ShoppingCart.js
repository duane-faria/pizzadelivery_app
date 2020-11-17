import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../styles/colors';
import cartActions from '../store/ducks/Cart';
import navigate from '../navigation/root';

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
          Pizza de {flavor}
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
const ShoppingCart = ({ Cart, dispatch, navigation }) => (
  <Screen>
    <View style={styles.content}>
      {Cart.orders.length > 0 ? (
        Cart.orders.map((o) => (
          <View style={{ marginBottom: 10 }}>
            <ListItem>
              <AppImage url={images[o.flavorName.toLowerCase()]} />
              <AppText
                remove={() => dispatch(cartActions.removeItem(o.id))}
                flavor={o.flavorName}
                size={o.sizeName}
                price={`R$ ${o.price}`}
              />
            </ListItem>
          </View>
        ))
      ) : (
        <ListItem>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Não há items no carrinho.
          </Text>
        </ListItem>
      )}
    </View>
    <View
      style={{
        marginTop: 20,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Menu')}
        style={{
          backgroundColor: colors.secondary,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}>
        <MaterialIcon name="add-shopping-cart" size={25} color={colors.white} />
      </TouchableWithoutFeedback>
      {Cart.orders.length > 0 && (
        <View>
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
            onPress={() => navigate('RequestOrder')}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 12,
                color: colors.white,
              }}>
              Finalizar pedido
            </Text>
            <MaterialIcon
              name="keyboard-arrow-right"
              size={25}
              color={colors.white}
              style={{ marginRight: 5, marginLeft: -2 }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  </Screen>
);

const mapStateToProps = (state) => ({
  Cart: state.Cart,
});

export default connect(mapStateToProps)(ShoppingCart);
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 15,
  },
});
