import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import BoxItem from '../components/BoxItem';
import Screen from '../components/Screen';
import flavorActions from '../store/ducks/Flavor';

// const flavors = [
//   {
//     title: 'Portuguesa',
//     image: require('../assets/images/1.png'),
//   },
//   {
//     title: 'Portuguesa',
//     image: require('../assets/images/2.png'),
//   },
//   {
//     title: 'Portuguesa',
//     image: require('../assets/images/3.png'),
//   },
//   {
//     title: 'Portuguesa',
//     image: require('../assets/images/4.png'),
//   },
//   {
//     title: 'Portuguesa',
//     image: require('../assets/images/5.png'),
//   },
//   {
//     title: 'Portuguesa',
//     image: require('../assets/images/6.png'),
//   },
// ];
const Flavor = ({ dispatch, Flavor }) => {
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
                image={flavor.image}
                title={flavor.title}
                key={Math.random()}
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

export default connect(mapStateToProps)(Flavor);

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
