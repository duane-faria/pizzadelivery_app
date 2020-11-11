import React from 'react';
import {SafeAreaView, StyleSheet, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';

import ButtonSubmit from '../components/form/ButtonSubmit';
import Form from '../components/form/Form';
import InputForm from '../components/form/InputForm';
import ClickableText from '../components/ClickableText';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

const Register = () => {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <SafeAreaView>
        <ImageBackground
          style={styles.image}
          source={require('../assets/images/fundo.jpg')}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']}
            style={styles.linearGradient}>
            <Image source={require('../assets/images/logo.png')} />
            <Form
              initialValues={{email: '', password: '', name: ''}}
              onSubmit={handleSubmit}
              validationSchema={schemaValidation}>
              <InputForm name="name" placeholder="Nome completo" />
              <InputForm name="email" placeholder="Seu e-mail" />
              <InputForm
                autoCapitalize="none"
                name="password"
                placeholder="Senha secreta"
                textContentType="password"
                secureTextEntry
              />
              <ButtonSubmit title="Criar conta" />
              <ClickableText
                text="Já tenho conta"
                onPress={() => console.log('indo pro cadastro')}
              />
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

export default Register;
