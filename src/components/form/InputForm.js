import React from 'react';
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import Input from '../Input';

export default function InputForm({style, name, ...props}) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <Input
      onChageText={(text) => setFieldValue(text)}
      onBlur={() => setFieldTouched(name)}
      style={[styles.container, style]}
      value={values[name]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
