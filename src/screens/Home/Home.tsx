import React from 'react'

import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native'

import { BG_COLOR_DARK, BG_COLOR_LIGHT, BG_COLOR_SECOND, PADDING } from '../../constants/constants'

import { ExchangeRate } from './exchangeRates/ExchangeRate'
import { FirstFrame } from './firstFrame/FirstFrame'
import { Offers } from './offers/Offers'
import { Verification } from './verification/Verification'

export const Home = () => {
  const theme = useColorScheme()
  const isDarkTheme = theme === 'dark'

  return (
    <ScrollView
      style={[
        styles.container,
        isDarkTheme ? { backgroundColor: BG_COLOR_DARK } : { backgroundColor: BG_COLOR_LIGHT },
      ]}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <View style={styles.firstFrame}>
        <FirstFrame />
      </View>
      <View style={styles.contentBox}>
        <Verification isDarkTheme={isDarkTheme} />
      </View>
      <View style={styles.contentBox}>
        <Offers isDarkTheme={isDarkTheme} />
      </View>
      <View style={styles.contentBox}>
        <ExchangeRate isDarkTheme={isDarkTheme} />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstFrame: {
    backgroundColor: BG_COLOR_SECOND,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentBox: {
    marginHorizontal: PADDING,
    marginTop: 20,
  },
})
