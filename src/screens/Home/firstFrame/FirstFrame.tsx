import React from 'react'

import { StyleSheet, View } from 'react-native'

import { WIDTH } from '../../../constants/constants'
import { MyProducts } from '../myProducts/MyProducts'

import { UserBar } from './userBar/UserBar'

export const FirstFrame = () => {
  return (
    <View style={styles.container}>
      <UserBar />
      <MyProducts />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    // backgroundColor: '#1F1D28',
    // position: 'relative',
  },
})
