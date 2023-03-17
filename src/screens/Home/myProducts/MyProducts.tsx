import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'

import { PADDING } from '../../../constants/constants'

export const MyProducts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Мои продукты</Text>
      <TouchableOpacity
        style={styles.settingsBtn}
        onPress={() => {
          Alert.alert('Go to settings')
        }}
      >
        <Image
          style={styles.settingsIcon}
          source={require('../../../../assets/icons/settingsIcon.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: PADDING,
    paddingTop: 20,
  },
  text: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '700',
  },
  settingsBtn: {
    //backgroundColor: '#646f85',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    tintColor: '#b8b6be',
    width: 20,
    height: 20,
    top: 2,
  },
})
