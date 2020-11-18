import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import Form from '../components/form/Form';
import InputForm from '../components/form/InputForm';
import Screen from '../components/Screen';
import SmallSubmitButton from '../components/form/SmallSubmitButton';
import cartActions from '../store/ducks/Cart';

const schemaValidation = Yup.object().shape({
  cep: Yup.string().required('Cep é obrigatória'),
  street: Yup.string().required('Rua é obrigatória'),
  district: Yup.string().required('Bairro é obrigatória'),
});

const RequestOrder = ({ Items, navigation, dispatch }) => {
  function submit(info) {
    dispatch(
      cartActions.sendOrder({ ...info, data: Items }, () => console.log('fim')),
    );
    Alert.alert('Mensagem', 'Seu pedido foi realizado com sucesso');
    navigation.navigate('Orders');
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
          onSubmit={submit}
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
          <View style={{ flexDirection: 'row', maxWidth: '100%' }}>
            <InputForm
              name="street"
              placeholder="Rua"
              container={{
                elevation: 7,
                marginRight: 15,
              }}
              width="80%"
              style={{ fontSize: 18 }}
            />

            <InputForm
              name="number"
              placeholder="Nº"
              container={{ elevation: 7 }}
              style={{ fontSize: 18 }}
              width="20%"
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
            <SmallSubmitButton />
          </View>
        </Form>
      </View>
    </Screen>
  );
};
const mapStateToProps = (state) => ({
  Items: state.Cart.orders,
});

export default connect(mapStateToProps)(RequestOrder);
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
