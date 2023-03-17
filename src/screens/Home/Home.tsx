import React from 'react'

import { StyleSheet, View } from 'react-native'

import { FirstFrame } from './firstFrame/FirstFrame'

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstFrame}>
        <FirstFrame />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe4f1',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // position: 'relative',
  },
  firstFrame: {
    backgroundColor: '#1F1D28',
    // width: WIDTH,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // position: 'absolute',
    // top: 0,
    // left: 0,
  },
})
