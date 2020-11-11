import React from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function PizzaBackground({children}) {
  return (
    <ImageBackground
      style={styles.image}
      source={require('../assets/images/fundo.jpg')}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']}
        style={styles.linearGradient}>
        <Image source={require('../assets/images/logo.png')} />
        {children}
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
  },
});
