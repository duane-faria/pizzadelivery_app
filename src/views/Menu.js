import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../styles/colors';
import typeActions from '../store/ducks/Type';

function AppImage() {
  return (
    <Image
      source={require('../assets/images/pizzas.png')}
      style={{ height: 90, width: 100, borderRadius: 10 }}
    />
  );
}

function AppText() {
  return (
    <View style={{ flexDirection: 'column', marginLeft: 10, flexShrink: 1 }}>
      <Text style={{ color: colors.secondary, fontSize: 18 }}>Pizzas</Text>
      <Text style={{ color: colors.gray, marginTop: 5 }}>
        Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome
      </Text>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
        <Icon
          name="clock-time-four-outline"
          size={15}
          color={colors.gray}
          style={{ marginRight: 5, marginLeft: -2 }}
        />
        <Text style={{ color: colors.gray }}>30 mins</Text>
      </View>
    </View>
  );
}
const Menu = ({ dispatch, navigation, Type }) => {
  React.useEffect(() => {
    dispatch(typeActions.loadTypeRequest());
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={styles.content}>
        <ListItem
          Image={AppImage}
          Text={AppText}
          style={{ marginBottom: 15 }}
          onPress={() =>
            navigation.navigate('Flavor', { product: Type.data[0][0] })
          }
        />
      </View>
    </Screen>
  );
};

Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  Type: state.Type,
});

export default connect(mapStateToProps)(Menu);

const styles = StyleSheet.create({
  container: {},
  content: {
    paddingHorizontal: 15,
  },
});
