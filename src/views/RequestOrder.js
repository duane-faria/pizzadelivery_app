import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import Arrow from 'react-native-vector-icons/MaterialIcons';

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
          <View
            style={{ width: '100%', marginTop: 25, alignItems: 'flex-end' }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                width: 150,
                height: 35,
                borderRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: 15,
              }}
              onPress={() => {
                Alert.alert('Alerta', 'Seu pedido foi realizado com sucesso');
                navigation.navigate('RequestOrder');
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontSize: 12,
                  color: colors.white,
                }}>
                Finalizar
              </Text>
              <Arrow
                name="keyboard-arrow-right"
                size={25}
                color={colors.white}
                style={{ marginRight: 5, marginLeft: -2 }}
              />
            </TouchableOpacity>
          </View>
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
