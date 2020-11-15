import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../styles/colors';

const Error = ({ error, styleContainer, style }) => (
  <View style={[styles.container, styleContainer]}>
    <Text style={[styles.text, style]}>{error}</Text>
  </View>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 30,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  text: {
    color: colors.danger,
    fontSize: 18,
  },
});
