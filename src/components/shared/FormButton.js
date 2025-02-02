import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../../constants/theme'

const FormButton = ({
    labelText='',
    handleOnPress=null,
    style,
    isPrimary=true,
    ...more
}) => {
  return (
    <TouchableOpacity style={{
        paddingVertical: 10,
        backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
        borderWidth: 1,
        width: '100%',
        borderColor: COLORS.primary,
        borderRadius: 5,
        ...style
    }}
    activeOpacity={0.9}
    onPress={handleOnPress}
    {...more}>
        <Text
        style={{
            textAlign: 'center',
            color: isPrimary ? COLORS.white : COLORS.primary,
            fontSize: 18,
        }}>{labelText}</Text>
    </TouchableOpacity>
  )
}

export default FormButton