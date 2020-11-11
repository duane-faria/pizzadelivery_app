import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export default function Input({...props}) {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
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
    height: 50,
  },
});
