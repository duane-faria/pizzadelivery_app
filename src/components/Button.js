import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../styles/colors';

export default function Button({title, onPress, ...props}) {
  return (
    <TouchableOpacity
      style={styles.container}
      title={title}
      onPress={onPress}
      {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
