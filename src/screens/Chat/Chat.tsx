import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

export const Chat = () => {
  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text style={styles.description}>Page "Chat" is developing</Text>
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
