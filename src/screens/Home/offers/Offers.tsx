import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { OffersCarousel } from './OffersCarousel'

export const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Предложения от банка</Text>
      <OffersCarousel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#221C35',
    paddingVertical: 20,
  },
})
