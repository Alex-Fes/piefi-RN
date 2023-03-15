import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, View } from 'react-native'

import { NestedStackType } from '../types/navigationsTypes'

import { Chat } from './Chat/Chat'
import { FirstScreen } from './FirstScreen/FirstScreen'
import { History } from './History/History'
import { Payment } from './Payment/Payment'
import { Services } from './Services/Services'

const Stack = createBottomTabNavigator<NestedStackType>()

export const Home = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName={'FirstScreen'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'FirstScreen'} component={FirstScreen} />
        <Stack.Screen name={'History'} component={History} />
        <Stack.Screen name={'Payment'} component={Payment} />
        <Stack.Screen name={'Services'} component={Services} />
        <Stack.Screen name={'Chat'} component={Chat} />
      </Stack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
