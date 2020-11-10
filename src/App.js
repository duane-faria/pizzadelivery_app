import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageBackground
          style={styles.image}
          source={require('./assets/images/fundo.jpg')}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1))';
  },
});

export default App;
