import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Form from './components/form/Form';
import InputForm from './components/form/InputForm';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ImageBackground
          style={styles.image}
          source={require('./assets/images/fundo.jpg')}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']}
            style={styles.linearGradient}>
            <Image source={require('./assets/images/logo.png')} />
            <Form initialValues={{email: '', password: ''}}>
              <InputForm name="email" placeholder="Seu e-mail" />
              <InputForm name="password" placeholder="Senha secreta" />
            </Form>
          </LinearGradient>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

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

export default App;
