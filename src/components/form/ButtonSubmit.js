import React from 'react';
import {useFormikContext} from 'formik';
import {View, StyleSheet} from 'react-native';

import Button from '../Button';

export default function ButtonSubmit({title, ...props}) {
  const {handleSubmit} = useFormikContext();

  return <Button title={title} onPress={handleSubmit} {...props} />;
}

const styles = StyleSheet.create({
  container: {},
});
