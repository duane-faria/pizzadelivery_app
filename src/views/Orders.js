import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../styles/colors';

const AppText = () => (
  <View style={{flexDirection: 'column', paddingHorizontal: 15}}>
    <Text style={{color: colors.secondary, fontSize: 16}}>Pedido #3</Text>
    <Text style={{color: colors.gray, marginTop: 5}}>Ontem às 17h</Text>
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

export default function Orders(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.content}>
        <ListItem Text={AppText} style={{marginBottom: 15}} />
        <ListItem Text={AppText} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
  },
  content: {
    paddingHorizontal: 20,
  },
});
