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

const Register = ({ navigation }) => {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <SafeAreaView>
        <PizzaBackground>
          <Form
            initialValues={{ email: '', password: '', name: '' }}
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
              onPress={() => navigation.navigate('Login')}
            />
          </Form>
        </PizzaBackground>
      </SafeAreaView>
    </>
  );
};

export default Register;
