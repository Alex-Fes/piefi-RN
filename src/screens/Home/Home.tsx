import React from 'react'

import { StyleSheet, View } from 'react-native'

import { PADDING } from '../../constants/constants'

import { FirstFrame } from './firstFrame/FirstFrame'
import { Verification } from './verification/Verification'

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstFrame}>
        <FirstFrame />
      </View>
      <View style={styles.verificationBox}>
        <Verification />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#dfe4f1',
  },
  firstFrame: {
    backgroundColor: '#1F1D28',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  verificationBox: {
    // backgroundColor: '#a6c0ef',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: PADDING,
    marginVertical: 20,
  },
})
