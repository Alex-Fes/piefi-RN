import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

export const Payment = () => {
  return (
    <View style={styles.container}>
      <Text>Payment page</Text>
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
})
