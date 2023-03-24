import React, { useState } from 'react'

import { Image, ImageBackground, ScrollView, StyleSheet, View } from 'react-native'

import { Button } from '../../components/Button'
import { PADDING, WIDTH } from '../../constants/constants'
import { LoginModal } from '../../modals/LoginModal'
import { RegistrationModal } from '../../modals/RegisrtationModal'

import { Carousel } from './Carousel'

export const Onboard = () => {
  const [view, setView] = useState(0)
  const [language, setLanguage] = useState(true)
  const [loginModalVisible, setLoginModalVisible] = useState(false)
  const [RegisterModalVisible, setRegisterModalVisible] = useState(false)

  const backgroundImage =
    view === 0
      ? require('../../../assets/Mesh-gradient.png')
      : require('../../../assets/Mesh-gradient1.png')

  return (
    <ImageBackground
      source={backgroundImage}
      // resizeMode={'cover'}
      style={[styles.backgroundImage, StyleSheet.absoluteFillObject]}
    >
      <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
          <Image style={styles.logo} source={require('../../../assets/icons/logoIconLight.png')} />
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
          <Carousel setView={setView} />
        </View>
        <View style={styles.loginBox}>
          <Button
            style={styles.loginBtn}
            title={'Войти'}
            fontSize={16}
            fontWeight={'600'}
            color={'#1F1D28'}
            onPress={() => setLoginModalVisible(!loginModalVisible)}
          >
            <LoginModal
              loginModalVisible={loginModalVisible}
              setLoginModalVisible={setLoginModalVisible}
            />
          </Button>
          <Button
            style={styles.signInBtn}
            title={'Создать аккаунт'}
            fontSize={16}
            fontWeight={'600'}
            color={'#FFF'}
            onPress={() => setRegisterModalVisible(!RegisterModalVisible)}
          >
            <RegistrationModal
              RegisterModalVisible={RegisterModalVisible}
              setRegisterModalVisible={setRegisterModalVisible}
            />
          </Button>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  head: {
    width: WIDTH - PADDING * 2,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    tintColor: '#FFF',
    width: 89,
    height: 28,
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
    paddingTop: 10,
  },
  loginBox: {
    width: WIDTH - PADDING * 2,
    height: 108,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 50,
  },
  loginBtn: {
    backgroundColor: '#FFF',
    width: WIDTH - PADDING * 2,
    maxWidth: 360,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  signInBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: WIDTH - PADDING * 2,
    maxWidth: 360,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
    paddingBottom: 15,
  },
})
