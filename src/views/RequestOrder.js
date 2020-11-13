import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import ButtonSubmit from '../components/form/ButtonSubmit';
import Form from '../components/form/Form';
import InputForm from '../components/form/InputForm';
import Screen from '../components/Screen';
import colors from '../styles/colors';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

export default function RequestOrder({ navigation }) {
  function handleSubmit(data) {
    console.log(data);
    navigation.navigate('Menu');
  }
  return (
    <Screen style={styles.container}>
      <View style={styles.content}>
        <Form
          initialValues={{
            observation: '',
            cep: '',
            street: '',
            number: '',
            district: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={schemaValidation}>
          <InputForm
            autoCapitalize="none"
            name="observation"
            placeholder="Alguma observação?"
            numberOfLines={6}
            multiline
            container={{ elevation: 7 }}
            textAlignVertical="top"
            style={{ fontSize: 18 }}
          />
          <InputForm
            name="cep"
            placeholder="Qual seu CEP?"
            container={{ elevation: 7 }}
            style={{ fontSize: 18 }}
          />
          <View style={{ flexDirection: 'row' }}>
            <InputForm
              name="street"
              placeholder="Rua"
              container={{ elevation: 7, width: '75%', marginRight: 5 }}
              style={{ fontSize: 18 }}
            />
            <InputForm
              name="number"
              placeholder="Nº"
              container={{ elevation: 7, width: '25%' }}
              style={{ fontSize: 18 }}
            />
          </View>
          <InputForm
            name="district"
            placeholder="Bairro"
            container={{ elevation: 7 }}
            style={{ fontSize: 18 }}
          />
          <ButtonSubmit
            title="FINALIZAR"
            style={{
              width: 150,
              backgroundColor: colors.primary,
              padding: 10,
              borderRadius: 20,
              marginTop: 10,
            }}
          />
        </Form>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  content: {
    paddingHorizontal: 20,
    // backgroundColor: 'blue',
    flex: 1,
  },
});
