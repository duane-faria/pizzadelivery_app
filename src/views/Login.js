import React from 'react';
import { SafeAreaView } from 'react-native';
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

const Login = ({ navigation }) => {
  function handleSubmit(data) {
    console.log(data);
    navigation.navigate('Menu');
  }
  return (
    <>
      <SafeAreaView>
        <PizzaBackground>
          <Form
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={schemaValidation}>
            <InputForm
              name="email"
              placeholder="Seu e-mail"
              style={{ fontFamily: 'Roboto' }}
            />
            <InputForm
              autoCapitalize="none"
              name="password"
              placeholder="Senha secreta"
              textContentType="password"
              secureTextEntry
              style={{ fontFamily: 'Roboto' }}
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

export default Login;
