import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../styles/colors';

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

export default function Menu(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.content}>
        <ListItem
          Image={AppImage}
          Text={AppText}
          style={{ marginBottom: 15 }}
        />
        <ListItem Image={AppImage} Text={AppText} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
  content: {
    paddingHorizontal: 15,
  },
});
