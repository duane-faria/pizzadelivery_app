import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export default function Input({container, ...props}) {
  return (
    <View style={[styles.container, container]}>
      <TextInput {...props} placeholderTextColor="#999999" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    minHeight: 50,
    fontFamily: 'Roboto',
  },
});
