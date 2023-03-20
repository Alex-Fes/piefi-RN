import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { TEXT_COLOR, TEXT_COLOR_SECOND } from '../../../constants/constants'

import { OffersCarousel } from './OffersCarousel'

export const Offers = (props: OffersPropsType) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          props.isDarkTheme ? { color: TEXT_COLOR } : { color: TEXT_COLOR_SECOND },
        ]}
      >
        Предложения от банка
      </Text>
      <OffersCarousel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 26,
    fontWeight: '700',
    paddingVertical: 20,
  },
})

type OffersPropsType = {
  isDarkTheme: boolean
}
