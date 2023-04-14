import styled from 'styled-components'
import { Theme } from '../../theme'

export const View = styled.View`

`

export const TextInput = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border-color: ${Theme.colors.black[30]};
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
  color: ${Theme.colors.black[10]};
  border-radius: 5px;
  padding-left: 10px;
  background: ${Theme.colors.white[30]};
`

export const TextError = styled.Text`
  font-size: 12px;
  color: red;
`
export const InputTitle = styled.Text`
  margin-top: 20px;
  top: 10px;
  font-weight: bold;
  font-size: 15px;
  color: ${Theme.colors.black[10]};
`

export const TouchableOpacity = styled.TouchableOpacity`
  width: 50%;
  z-index: 90;
`
export const InputIcon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  height: 55px;
  border-width: 1px;
  border-color: ${Theme.colors.black[30]};
  font-size: 16px;
  margin-top: 15px;
  color: ${Theme.colors.black[10]};
  border-radius: 5px;
  background: ${Theme.colors.white[30]};
`
export const TextDate = styled.Text`
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`

export const InputNote = styled.TextInput`
  width: 100%;
  border-width: 1px;
  display: flex;
  border-color: ${Theme.colors.black[30]};
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
  color: ${Theme.colors.black[10]};
  border-radius: 5px;
  padding-left: 10px;
  background: ${Theme.colors.white[30]};
  height: 150px;
`
