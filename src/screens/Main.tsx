import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'

import { RootStackParamList } from '../types/navigationsTypes'

import { Home } from './Home'
import { Onboard } from './Onboard/Onboard'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Main = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName={'Onboard'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Onboard'} component={Onboard} />
        <Stack.Screen name={'Home'} component={Home} />
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
