import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import colors from '../styles/colors';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={require('../assets/images/header-background.png')}
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  image: {
    height: 120,
    width: '100%',
    position: 'absolute',
  },
});
