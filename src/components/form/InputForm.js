import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import Input from '../Input';
import colors from '../../styles/colors';
import Error from '../Error';

export default function InputForm({ container, style, name, ...props }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <View style={{ marginBottom: 10, width: '100%' }}>
      <Input
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        style={[styles.container, style]}
        value={values[name]}
        {...props}
        container={container}
      />
      {errors[name] && touched[name] && (
        <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <Error error={errors[name]} styleContainer={{ marginVertical: 10 }} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
