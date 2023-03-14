import React, { useState } from 'react'

import { Image, ImageBackground, StyleSheet, View } from 'react-native'

import { Button } from '../../components/Button'
import { Carousel } from '../../components/Carousel'
import { PADDING, WIDTH } from '../../constants/constants'

type ViewType = 'first' | 'second'

export const Onboard = () => {
  const [view, setView] = useState<ViewType>('first')
  const [language, setLanguage] = useState(true)

  const backgroundImage =
    view === 'first'
      ? require('../../../assets/Mesh-gradient.png')
      : require('../../../assets/Mesh-gradient1.png')

  // const logoWhiteback = require('../../../assets/piefi-logo–withback.png')

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode={'cover'} style={styles.backgroundImage}>
        <View style={styles.head}>
          <Image source={require('../../../assets/piefi-logo–withback.png')} />
          <Button
            style={styles.changeLangBtn}
            title={language ? 'RU' : 'EN'}
            fontSize={14}
            fontWeight={'600'}
            color={'#fff'}
            onPress={() => setLanguage(!language)}
          />
        </View>
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <View style={styles.loginBox}>
          <Button
            style={styles.loginBtn}
            title={'Войти'}
            fontSize={16}
            fontWeight={'600'}
            color={'#1F1D28'}
          />
          <Button
            style={styles.signInBtn}
            title={'Создать аккаунт'}
            fontSize={16}
            fontWeight={'600'}
            color={'#FFF'}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  head: {
    width: WIDTH - PADDING * 2,
    paddingTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changeLangBtn: {
    height: 40,
    width: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  loginBox: {
    width: WIDTH - PADDING * 2,
    height: 108,
    justifyContent: 'space-between',
  },
  loginBtn: {
    backgroundColor: '#FFF',
    width: WIDTH - PADDING * 2,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
  },
  signInBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: WIDTH - PADDING * 2,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
  },
})
