/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Category, Container, ContainerDateTime, ContainerRadio, ContainerText, } from './styles'
import { InputTitulo, InputDate, InputNotes, InputTime } from '../../component/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ButtonTask } from '../../component/touchTask'
import { ButtonIcon } from '../../component/buttonIcon'
import { HeaderTask } from '../../component/headerTask'
import DatePicker from 'react-native-date-picker'
import api from '../../services'

export default function Tasks({ navigation }) {
  const [selected, setSelected] = useState()
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const schema = yup.object().shape({
    title: yup.string().max(12, '* Máximo de 12 caracteres'),
    notes: yup.string().min(6, '* As notas devem conter pelo menos 6 caracteres').required('Informe sua anotação')
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      notes: ''
    },
    resolver: yupResolver(schema)
  })

  async function setCategoryOnPress(item) {
    console.log(item)
    if (item === 1) {
      setSelected({
        image: 'https://images2.imgbox.com/1f/88/DDVrvBXp_o.png',
        backgorund: '#DBECF6'
      })
    } else if (item === 2) {
      setSelected({
        image: 'https://images2.imgbox.com/99/84/509wmiw1_o.png',
        background: '#E7E2F3'
      })
    } else {
      setSelected({
        image: 'https://images2.imgbox.com/24/28/RZqEMuh0_o.png',
        background: '#FEF5D3'
      })
    }
    console.log(selected)
  }
  const formatoDate = date.toLocaleDateString('pt-BR')
  const formatoTime = date.toLocaleTimeString('pt-BR')
  const onSubmit = async input => {
    const formInput = {
      title: input.title,
      notes: input.notes,
      background: selected.background,
      image: selected.image,
      status: true,
      time: formatoTime,
      date: formatoDate
    }
    console.log(formInput)
    api.post('tasks', formInput)
    navigation.navigate('Home')
  }
  return (
  <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}>
    <Container>
      <HeaderTask onPress={() => navigation.goBack()}>
      </HeaderTask>
      <ContainerText>

        <InputTitulo
          name="title"
          placeholder="Task Title"
          control={control}
          errors={errors}
        />
        <ContainerRadio>
          <Category>Category</Category>
          <ButtonIcon onPress={() => setCategoryOnPress(1)}  image={require('../../assets/calendar.png')}/>
          <ButtonIcon onPress={() => setCategoryOnPress(2)}  image={require('../../assets/list.png')}/>
          <ButtonIcon onPress={() => setCategoryOnPress(3)}  image={require('../../assets/trofeu.png')}/>
        </ContainerRadio>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />

        <ContainerDateTime>
          <InputDate
            onPress={() => setOpen(true)}
            placeholder="Date"
            value={formatoDate}
          />
          <InputTime
            onPress={() => setOpen(true)}
            placeholder="Time"
            value={formatoTime}
          />
        </ContainerDateTime>
        <InputNotes
          name="notes"
          placeholder="Notes"
          control={control}
          errors={errors}
        />
        <ButtonTask name='Save' onPress={handleSubmit(onSubmit)} />
      </ContainerText>
    </Container>
  </TouchableWithoutFeedback>  
  )
}
