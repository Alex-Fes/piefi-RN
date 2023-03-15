import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

export const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>Chat page</Text>
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
