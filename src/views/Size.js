import React from 'react';
import { View, StyleSheet } from 'react-native';
import BoxItem from '../components/BoxItem';

import Screen from '../components/Screen';

const sizes = [
  {
    title: 'Gigante',
    subTitle: 'R$ 76,00',
    image: require('../assets/images/tamanho-gg.png'),
  },
  {
    title: 'Grande',
    subTitle: 'R$ 59,00',
    image: require('../assets/images/tamanho-g.png'),
  },
  {
    title: 'Média',
    subTitle: 'R$ 42,00',
    image: require('../assets/images/tamanho-m.png'),
  },
  {
    title: 'Pequena',
    subTitle: 'R$ 29,00',
    image: require('../assets/images/tamanho-p.png'),
  },
];
export default function Size() {
  return (
    <Screen style={styles.container}>
      <View style={styles.boxContainer}>
        {sizes.map((size) => (
          <BoxItem
            style={styles.boxItem}
            image={size.image}
            title={size.title}
            subTitle={size.subTitle}
            key={Math.random()}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  boxContainer: {
    marginTop: 50,
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
