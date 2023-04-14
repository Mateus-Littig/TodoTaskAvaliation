/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { List, ViewImage, ImageIcon, ListContainerText, TextBody, TextBodyTime, ListError, 
  ViewImageError, ListContainerTextError, TextBodyError, TextTimeError, Container,
  ContainerTitle, TextTime, TextTitle, ContainerList, TextComplete, ContainerListError } from './styles'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../services'
import { Background } from '../../component/container'
import { Button }  from '../../component/touchable'

export default function Home({ navigation }) {
  const [data, setData] = useState([])
  const [item, setItem] = useState([])
  const [itemFalse, setItemFalse] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      pushItem()
    }, [])
  )
  useEffect(() => {
    handleItem()
    pushItem()
  }, [])

  async function handleItem() {
    setData(await AsyncStorage.getItem('date'))
  }
  async function pushItem() {
    const data = await api.get('tasks')
    const { add, remove } = data.data.reduce(
      (result, item) => {
        if (item.status === true) {
          result.add.push(item)
        } else {
          result.remove.push(item)
        }
        return result
      },
      { add: [], remove: [] }
    )
    setItem(add)
    setItemFalse(remove)
  }
  async function addItem(id) {
    const apiData = await api.get(`tasks/${id}`)

    const object = {
      title: apiData.data.title,
      time: apiData.data.time,
      status: !apiData.data.status,
      image: apiData.data.image,
      background: apiData.data.background
    }
    await api.put(`tasks/${id}`, object)
    pushItem()
  }
  const listAdd = ({ item }) => (
    <List>
      <ViewImage backgroundColor={item.background} >
        <ImageIcon source={{ uri: item.image }} />
      </ViewImage>
      <ListContainerText>
        <TextBody>{item.title}</TextBody>
        <TextBodyTime>{item.time}</TextBodyTime>
      </ListContainerText>
      <CheckBox
        onValueChange={() => addItem(item.id)}
        value={''}
        onPress={() => addItem(item.id)}
      />
    </List>
  )
  const listAddFalse = ({ item }) => (
    <ListError>
      <ViewImageError backgroundColor={item.background} >
        <ImageIcon source={{ uri: item.image }} />
      </ViewImageError>
      <ListContainerTextError>
        <TextBodyError>{item.title}</TextBodyError>
        <TextTimeError>{item.time}</TextTimeError>
      </ListContainerTextError>
      <CheckBox
        value={addItem}
        onPress={() => addItem(item.id)}
        onValueChange={() => addItem(item.id)}
      />
    </ListError>
  )

  return (
    <Container>
      <ContainerTitle>
        <Background />
        <TextTime>{data}</TextTime>
        <TextTitle>My Todo List</TextTitle>
      </ContainerTitle>

      <ContainerList>
        <FlatList
          data={item}
          renderItem={listAdd}
          keyExtractor={(item) => item.id}
        />
      </ContainerList>

        <TextComplete>Completed</TextComplete>
      
      <ContainerListError>
        <FlatList
          data={itemFalse}
          renderItem={listAddFalse}
          keyExtractor={(item) => item.id}
        />
      </ContainerListError>
      <Button onPress={() => navigation.navigate('Tasks')} name='Add New Task'/>
    </Container >
  )
}
