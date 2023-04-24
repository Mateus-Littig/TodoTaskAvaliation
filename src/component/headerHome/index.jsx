/* eslint-disable no-undef */
import React from 'react'
import { Container, ImgBack, ImgBackLow } from './styles'

export function HeaderHome() {
  return (
    <Container>
      <ImgBack source={require('../../assets/iconGr.png')}/>
      <ImgBackLow source={require('../../assets/iconPq.png')}/>
    </Container>
  )
}
