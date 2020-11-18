import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useFormikContext } from 'formik';

import colors from '../../styles/colors';

export default function SmallSubmitButton(props) {
  const { handleSubmit } = useFormikContext();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        width: 150,
        height: 35,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
      }}
      onPress={() => {
        handleSubmit();
      }}>
      <Text
        style={{
          textTransform: 'uppercase',
          fontSize: 12,
          color: colors.white,
        }}>
        Finalizar
      </Text>
      <MaterialIcon
        name="keyboard-arrow-right"
        size={25}
        color={colors.white}
        style={{ marginRight: 5, marginLeft: -2 }}
      />
    </TouchableOpacity>
  );
}
