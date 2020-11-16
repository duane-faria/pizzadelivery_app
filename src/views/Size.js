import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import BoxItem from '../components/BoxItem';
import Screen from '../components/Screen';
import sizeActions from '../store/ducks/Size';
import cartActions from '../store/ducks/Cart';

const images = {
  gigante: require('../assets/images/tamanho-gg.png'),
  grande: require('../assets/images/tamanho-g.png'),
  media: require('../assets/images/tamanho-m.png'),
  pequena: require('../assets/images/tamanho-p.png'),
};

const Size = ({ route, dispatch, Size, navigation }) => {
  const { order } = route.params;
  React.useEffect(() => {
    dispatch(sizeActions.loadSizeRequest());
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={styles.boxContainer}>
        {Size &&
          Size.data.map((size) => {
            let url = images[size.name.toLowerCase()];
            if (size.name === 'Média') {
              url = images.media;
            }
            return (
              <BoxItem
                style={styles.boxItem}
                image={url}
                title={size.name}
                subTitle={`R$ ${size.basePrice * order.flavor.price}`}
                key={size._id}
                onPress={() => {
                  const orderItem = {
                    productId: order.product._id,
                    productName: order.product.name,
                    flavorId: order.flavor._id,
                    flavorName: order.flavor.name,
                    sizeId: size._id,
                    sizeName: size.name,
                  };
                  dispatch(cartActions.addItem(orderItem));
                  navigation.navigate('ShoppingCart');
                }}
              />
            );
          })}
      </View>
    </Screen>
  );
};

const mapStateToProps = (state) => ({
  Size: state.Size,
});

export default connect(mapStateToProps)(Size);
const styles = StyleSheet.create({
  container: {},
  boxContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  boxItem: {
    marginHorizontal: 5,
    marginBottom: 20,
  },
});
