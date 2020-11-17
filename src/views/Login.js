import React from 'react';
import { SafeAreaView, Keyboard, View } from 'react-native';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonSubmit from '../components/form/ButtonSubmit';
import Form from '../components/form/Form';
import InputForm from '../components/form/InputForm';
import ClickableText from '../components/ClickableText';
import PizzaBackground from '../components/PizzaBackground';
import Error from '../components/Error';
import authActions from '../store/ducks/Auth';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

const Login = ({ Auth, navigation, loginRequest }) => {
  function handleSubmit(data) {
    Keyboard.dismiss();
    loginRequest(data);
  }
  return (
    <>
      <SafeAreaView>
        <PizzaBackground>
          <View style={{ marginTop: 10, width: '100%', alignItems: 'center' }}>
            {Auth.error && (
              <Error
                error="Usuário ou senha incorretos."
                styleContainer={{ marginBottom: 10 }}
              />
            )}
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
          </View>
        </PizzaBackground>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(authActions, dispatch);

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
