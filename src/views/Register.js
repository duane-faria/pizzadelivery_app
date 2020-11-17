import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import ButtonSubmit from '../components/form/ButtonSubmit';
import Form from '../components/form/Form';
import InputForm from '../components/form/InputForm';
import ClickableText from '../components/ClickableText';
import PizzaBackground from '../components/PizzaBackground';
import auth from '../api/auth';
import useApi from '../hooks/useApi';
import colors from '../styles/colors';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  name: Yup.string().required('Nome é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

const Register = ({ navigation }) => {
  const { error, request } = useApi(auth.register);

  async function handleSubmit(data) {
    const response = await request(data);
    console.log(error);
  }
  return (
    <>
      <SafeAreaView>
        <PizzaBackground>
          {error && (
            <View
              style={{
                backgroundColor: colors.white,
                height: 30,
                borderRadius: 10,
                marginTop: 25,
                paddingHorizontal: 10,
                justifyContent: 'center',
              }}>
              <Text style={{ color: colors.danger, fontSize: 18 }}>
                E-mail já cadastrado
              </Text>
            </View>
          )}
          <View style={{ width: '100%', marginTop: 10, alignItems: 'center' }}>
            <Form
              initialValues={{ email: '', name: '', password: '' }}
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
          </View>
        </PizzaBackground>
      </SafeAreaView>
    </>
  );
};

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
