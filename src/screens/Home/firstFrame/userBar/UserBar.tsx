import React from 'react'

import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { PADDING, TEXT_COLOR } from '../../../../constants/constants'

export const UserBar = () => {
  return (
    <View style={styles.topHeader}>
      <View style={styles.userBox}>
        <TouchableOpacity
          style={styles.nameBtn}
          onPress={() => {
            Alert.alert('Go to my account')
          }}
        >
          <View style={styles.nameLetter}>
            <Text style={styles.nameLetterStyle}>A</Text>
          </View>
          <Text style={styles.nameStyle}>Alexander</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoBox}>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            Alert.alert('Go to search')
          }}
        >
          <Image
            style={styles.searchIcon}
            source={require('../../../../../assets/icons/searchIcon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.notificationBtn}
          onPress={() => {
            Alert.alert('Go to notifications')
          }}
        >
          <Image
            style={styles.notificationIcon}
            source={require('../../../../../assets/icons/notificationIcon.png')}
          />
          <View style={styles.notificationCountBox}>
            <Text style={styles.notificationCount}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topHeader: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
  },
  userBox: {},
  nameBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: PADDING,
  },
  nameLetter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#302A3B',
    position: 'relative',
    height: 28,
    width: 28,
    borderRadius: 20,
    borderWidth: 1.5,
    borderTopColor: '#8854FA',
    borderRightColor: '#C16CC9',
    borderBottomColor: '#4F8DD8',
    borderLeftColor: '#8854FA',
  },
  nameLetterStyle: {
    color: TEXT_COLOR,
    fontWeight: '700',
    fontSize: 18,
  },
  nameStyle: {
    marginHorizontal: 6,
    fontWeight: '600',
    fontSize: 14,
    color: TEXT_COLOR,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: PADDING,
  },
  searchBtn: {
    height: 48,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    height: 20,
    width: 20,
    tintColor: '#FFF',
  },
  notificationBtn: {
    height: 48,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationIcon: {
    height: 20,
    width: 20,
    tintColor: '#FFF',
  },
  notificationCountBox: {
    width: 12,
    height: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#1F1D28',
    backgroundColor: '#E02323',
    position: 'absolute',
    top: 10,
    right: 6,
  },
  notificationCount: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 8,
  },
})
