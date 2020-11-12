import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default function ListItem({Image, Text, style}) {
  return (
    <View style={[styles.container, style]}>
      {Image && <Image />}
      <Text />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: '100%',
    elevation: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
