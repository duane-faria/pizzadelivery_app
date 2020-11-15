import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../styles/colors';

export default function BoxItem({ image, title, subTitle, style, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.imageContainer}>
          <Image source={image} />
        </View>
        <Text style={[styles.title, !subTitle ? { marginTop: 20 } : {}]}>
          {title}
        </Text>
        {subTitle != false && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 220,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  image: {
    minHeight: 20,
    minWidth: 20,
  },
  imageContainer: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 5,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  subTitle: { color: colors.gray, fontSize: 20, fontFamily: 'Helvetica' },
});
