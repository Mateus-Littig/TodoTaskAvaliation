import styled from 'styled-components/native'
import { Theme } from '../../theme'

export const TouchableContainer = styled.TouchableOpacity`
  position: absolute;
  width: 90%;
  margin-left: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 750px;
  height: 56px;
  background: ${Theme.colors.blue[10]};
  border-radius: 40px;
`
export const TouchableText = styled.Text`
  color: ${Theme.colors.white[10]};
  font-weight: bold;
  font-size: 16px;
`
