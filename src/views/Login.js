import React from 'react';
import {SafeAreaView, StyleSheet, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';

import ButtonSubmit from '../components/form/ButtonSubmit';
import Form from '../components/form/Form';
import InputForm from '../components/form/InputForm';
import ClickableText from '../components/ClickableText';
import PizzaBackground from '../components/PizzaBackground';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

const Login = ({navigation}) => {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <SafeAreaView>
        <PizzaBackground>
          <Form
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={schemaValidation}>
            <InputForm name="email" placeholder="Seu e-mail" />
            <InputForm
              autoCapitalize="none"
              name="password"
              placeholder="Senha secreta"
              textContentType="password"
              secureTextEntry
            />
            <ButtonSubmit title="Entrar" />
            <ClickableText
              text="Criar conta gratuita"
              onPress={() => navigation.navigate('Register')}
            />
          </Form>
        </PizzaBackground>
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

export default Login;
