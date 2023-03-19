import React from 'react'

import { ScrollView, StyleSheet, View } from 'react-native'

import { PADDING } from '../../constants/constants'

import { FirstFrame } from './firstFrame/FirstFrame'
import { Offers } from './offers/Offers'
import { Verification } from './verification/Verification'

export const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstFrame}>
        <FirstFrame />
      </View>
      <View style={styles.contentBox}>
        <Verification />
      </View>
      <View style={styles.contentBox}>
        <Offers />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 40,
    // backgroundColor: '#dfe4f1',
  },
  firstFrame: {
    backgroundColor: '#1F1D28',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentBox: {
    marginHorizontal: PADDING,
    marginTop: 20,
  },
})
