import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BoxItem from '../components/BoxItem';
import Screen from '../components/Screen';
import flavorActions from '../store/ducks/Flavor';

const images = {
  portuguesa: require('../assets/images/portuguesa.png'),
  pepperoni: require('../assets/images/pepperoni.png'),
  atum: require('../assets/images/atum.png'),
  brocolis: require('../assets/images/brocolis.png'),
  queijo: require('../assets/images/queijo.png'),
  calabresa: require('../assets/images/calabresa.png'),
};
const FlavorComponent = ({ dispatch, Flavor, navigation }) => {
  React.useEffect(() => {
    dispatch(flavorActions.loadFlavorRequest());
  }, []);
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <View style={styles.boxContainer}>
          {Flavor.data &&
            Flavor.data.map((flavor) => (
              <BoxItem
                style={styles.boxItem}
                image={images[flavor.name.toLowerCase()]}
                title={flavor.name}
                key={flavor._id}
                onPress={() =>
                  navigation.navigate('Size', { flavorId: flavor._id })
                }
              />
            ))}
        </View>
      </Screen>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  Flavor: state.Flavor,
});

FlavorComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // Flavor: PropTypes.shape({
  //   data: PropTypes.arrayOf({}).isRequired,
  // }),
};

export default connect(mapStateToProps)(FlavorComponent);

const styles = StyleSheet.create({
  container: {},
  boxContainer: {
    marginTop: 30,
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
