import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

export const Payment = () => {
  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text style={styles.description}>Page "Payment" is developing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 20,
    color: '#072eea',
  },
})
