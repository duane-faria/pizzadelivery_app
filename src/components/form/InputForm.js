import React from 'react';
import { StyleSheet, Text } from 'react-native';
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
    <>
      <Input
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        style={[styles.container, style]}
        value={values[name]}
        {...props}
        container={container}
      />
      {errors[name] && touched[name] && (
        <Error error={errors[name]} styleContainer={{ marginTop: -5 }} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
