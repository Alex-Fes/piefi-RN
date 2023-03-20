import React from 'react'

import { View, Text, StyleSheet, Image } from 'react-native'

import {
  BG_COLOR_FOR_ITEM,
  BG_COLOR_FOR_ITEM_DARK,
  PADDING,
  TEXT_COLOR,
  TEXT_COLOR_SECOND,
  TINTCOLOR,
  WIDTH,
} from '../../../constants/constants'

export const Verification = (props: VerificationPropsType) => {
  const textColor = props.isDarkTheme ? { color: TEXT_COLOR } : { color: TEXT_COLOR_SECOND }
  const backgroundColor = props.isDarkTheme
    ? { backgroundColor: BG_COLOR_FOR_ITEM_DARK }
    : { backgroundColor: BG_COLOR_FOR_ITEM }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, textColor]}>Подтвердите аккаунт</Text>
      <View style={styles.actionBox}>
        <View style={[styles.verification, styles.contentBox, backgroundColor]}>
          <Image
            source={require('../../../../assets/icons/historyIcon.png')}
            style={styles.timeIcon}
          />
          <Text style={[styles.actionTitle, textColor]}>Верификация личности</Text>
          <View
            style={[
              styles.statusBox,
              props.isDarkTheme ? { backgroundColor: '#1F1D28' } : { backgroundColor: '#E6E5E7' },
            ]}
          >
            <Text style={[styles.status, textColor]}>На рассмотрении</Text>
          </View>
        </View>
        <View style={[styles.confirmEmail, styles.contentBox, backgroundColor]}>
          <Image
            source={require('../../../../assets/icons/verificationIcon/emailIcon.png')}
            style={styles.emailIcon}
          />
          <Text style={[styles.actionTitle, { bottom: 16 }, textColor]}>Подтвердите почту</Text>
        </View>
      </View>
    </View>
  )
}

type VerificationPropsType = {
  isDarkTheme: boolean
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 26,
    fontWeight: '700',
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
    marginRight: 10,
  },
  verification: {},
  timeIcon: {
    height: 30,
    width: 30,
    tintColor: TINTCOLOR,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
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
