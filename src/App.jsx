import React from 'react'
import StackRoutes from './routes/stackRoutes'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const date = new Date()
  const dateString = date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  AsyncStorage.setItem('date', dateString)
  return (
    <StackRoutes/>
  )
}
