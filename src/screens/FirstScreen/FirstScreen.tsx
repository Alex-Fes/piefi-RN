import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Text>First screen</Text>
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
