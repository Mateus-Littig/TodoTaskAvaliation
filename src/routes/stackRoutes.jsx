import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../pages/home'
import Tasks from '../pages/task'

const Stack = createNativeStackNavigator()

export default function StackRoutes () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ 
            headerShown: false 
          }}
        />
        <Stack.Screen
          name='Tasks'
          component={Tasks}
          options={{ 
            headerShown: false 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
