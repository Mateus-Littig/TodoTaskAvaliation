/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react-native'
import { Container, ImgBack, TextTitle, ButtonClose, CloseIconText, ImgBackLow } from './styles'


export function BackgroundSmall({ onPress }) {
  return (
    <Container>
      <ImgBack source={require('../../assets/iconGr.png')}/>
      <ButtonClose onPress={onPress}><CloseIconText>X</CloseIconText></ButtonClose>
      <TextTitle>Add New task</TextTitle>
      <ImgBackLow source={require('../../assets/iconPq.png')}/>
    </Container>
  )
}
