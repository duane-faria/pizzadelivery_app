import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

import colors from '../styles/colors';

export default function ClickableText({text, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 15,
    marginTop: 15,
    fontWeight: 'bold',
  },
});
