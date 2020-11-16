import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../styles/colors';

const ListItem = ({ children, Image, Text, style, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container, style]}>
      {Image && <Image />}
      {Text && <Text />}
      {children}
    </View>
  </TouchableWithoutFeedback>
);

ListItem.propTypes = {
  Image: PropTypes.func,
  Text: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  onPress: PropTypes.func,
};

export default ListItem;

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
