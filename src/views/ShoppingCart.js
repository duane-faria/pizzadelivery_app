import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrow from 'react-native-vector-icons/MaterialIcons';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../styles/colors';

function AppImage() {
  return (
    <Image
      source={require('../assets/images/portuguesa.png')}
      style={{ height: 90, width: 100 }}
    />
  );
}

function AppText() {
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
          Pizza Calabresa
        </Text>
        <Text style={{ color: colors.gray, marginTop: 5 }}>Tamanho: Média</Text>
        <Text
          style={{
            color: colors.secondary,
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          R$42, 00
        </Text>
      </View>
      <TouchableOpacity style={{ width: 40 }}>
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
export default function ShoppingCart() {
  return (
    <Screen style={styles.container}>
      <View style={styles.content}>
        <ListItem
          Text={AppText}
          Image={AppImage}
          style={{ justifyContent: 'space-between' }}
        />
        <View style={{ width: '100%', marginTop: 25 }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              width: 220,
              height: 45,
              borderRadius: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 16,
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
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
  },
  content: {
    marginHorizontal: 15,
  },
});
