import React from 'react'

import { View, Text, StyleSheet, Image } from 'react-native'

import { PADDING, WIDTH } from '../../../constants/constants'

export const Verification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Подтвердите аккаунт</Text>
      <View style={styles.actionBox}>
        <View style={[styles.verification, styles.contentBox]}>
          <Image
            source={require('../../../../assets/icons/historyIcon.png')}
            style={styles.timeIcon}
          />
          <Text style={styles.actionTitle}>Верификация личности</Text>
          <View style={styles.statusBox}>
            <Text style={styles.status}>На рассмотрении</Text>
          </View>
        </View>
        <View style={[styles.confirmEmail, styles.contentBox]}>
          <Image
            source={require('../../../../assets/icons/verificationIcon/emailIcon.png')}
            style={styles.emailIcon}
          />
          <Text style={[styles.actionTitle, { bottom: 16 }]}>Подтвердите почту</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#221C35',
  },
  actionBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  contentBox: {
    width: (WIDTH - PADDING * 2) / 2 - 5,
    height: 160,
    borderRadius: 20,
    backgroundColor: 'rgba(227,232,236,0.73)',
    marginRight: 10,
  },
  verification: {
    // justifyContent: 'flex-end',
  },
  timeIcon: {
    height: 30,
    width: 30,
    tintColor: '#8854FA',
    top: 10,
    left: 10,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  statusBox: {
    height: 30,
    width: 121,
    borderRadius: 12,
    backgroundColor: '#E6E5E7',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
    color: '#221C35',
  },
  confirmEmail: {
    position: 'relative',
    justifyContent: 'flex-end',
  },
  emailIcon: {
    width: 121,
    height: 120,
    position: 'absolute',
    left: 18,
    top: 10,
  },
})
