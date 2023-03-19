import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, View } from 'react-native'

import { MyTabBar } from '../components/MyTabBar'
import { PADDING, WIDTH } from '../constants/constants'
import { NestedTabType } from '../types/navigationsTypes'

import { Chat } from './Chat/Chat'
import { History } from './History/History'
import { Home } from './Home/Home'
import { Payment } from './Payment/Payment'
import { Services } from './Services/Services'

const Tab = createBottomTabNavigator<NestedTabType>()

export const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        tabBar={props => <MyTabBar {...props} />}
      >
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'History'} component={History} />
        <Tab.Screen name={'Payment'} component={Payment} />
        <Tab.Screen name={'Services'} component={Services} />
        <Tab.Screen name={'Chat'} component={Chat} />
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  tabBarStyle: {
    position: 'absolute',
    width: WIDTH - PADDING * 2,
    height: 84,
  },
  tabBarIconStyle: {
    flex: 1,
    width: 24,
    height: 24,
  },
  tabBarLabelStyle: {},
  focusedIcon: {},
  unFocusedIcon: {
    width: 24,
    height: 24,
  },
})
