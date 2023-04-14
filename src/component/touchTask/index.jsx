/* eslint-disable react/prop-types */
import React from 'react-native'
import { TouchableContainer, TouchableText } from './styles'

export function ButtonTask({ name, onPress }) {
  return (
    <TouchableContainer onPress={onPress}>
      <TouchableText>{name}</TouchableText >
    </TouchableContainer>
  )
}
