/* eslint-disable react/prop-types */
import React from 'react-native'
import { View, TextInput, TextError, InputTitle, InputIcon, TouchableOpacity, TextDate, InputNote } from './styles'
import { Controller } from 'react-hook-form'

export function InputTitulo({ name, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <InputTitle>{placeholder}</InputTitle>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChange}
            ref={inputRef}
          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}

export function InputDate({ placeholder, onPress, value }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <InputTitle>{placeholder}</InputTitle>

      <InputIcon>
        <TextDate>{value}</TextDate>
      </InputIcon>
    </TouchableOpacity>
  )
}

export function InputTime({ placeholder, onPress, value }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <InputTitle>{placeholder}</InputTitle>
      <InputIcon>
        <TextDate>{value}</TextDate>
      </InputIcon>
    </TouchableOpacity>
  )
}

export function InputNotes({ name, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <InputTitle>{placeholder}</InputTitle>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputNote
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              onSubmitEditing={onSubmitEditing}
              onChangeText={onChange}
              ref={inputRef}
            />
          )}
        />
        {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}
