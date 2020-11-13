import React from 'react';
import { SafeAreaView, Keyboard, Text } from 'react-native';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ButtonSubmit from '../components/form/ButtonSubmit';
import Form from '../components/form/Form';
import InputForm from '../components/form/InputForm';
import ClickableText from '../components/ClickableText';
import PizzaBackground from '../components/PizzaBackground';
import Error from '../components/Error';
import auth from '../api/auth';
import useApi from '../hooks/useApi';
import authActions from '../store/ducks/Auth';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

const Login = ({ navigation, dispatch }) => {
  const authApi = useApi(auth.login);

  async function handleSubmit(data) {
    Keyboard.dismiss();
    dispatch(authActions.loginRequest(data));
  }
  return (
    <>
      <SafeAreaView>
        <PizzaBackground>
          {authApi.error && <Error error="Usuário não encontrado" />}
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

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(Login);
