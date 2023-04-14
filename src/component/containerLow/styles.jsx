import styled from 'styled-components/native'
import { Theme } from '../../theme'

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background: ${Theme.colors.blue[10]};
`
export const ImgBack = styled.Image`
`
export const TextTitle = styled.Text`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: ${Theme.colors.white[10]};
  align-items: center;
  justify-content: center;
  margin-left: 150px;
  margin-top: 35px;
`
export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  width: 48px;
  height: 48px;
  border-width: 1px;
  border-radius: 50px;
  display: flex;
  border: none;
  margin-top: 25px;
  background-color: ${Theme.colors.white[10]};
`
export const CloseIconText = styled.Text`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-size: 20px;
  color: ${Theme.colors.black[10]};
  font-weight: bold;
`
export const ImgBackLow = styled.Image`
  left: 350px;
  bottom: 142px;
`
