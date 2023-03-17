import React, { useState } from 'react'

import { Image, ImageBackground, StyleSheet, View } from 'react-native'

import { Button } from '../../components/Button'
import { Carousel } from '../../components/Carousel'
import { PADDING, WIDTH } from '../../constants/constants'
import { LoginModal } from '../../modals/LoginModal'
import { RegistrationModal } from '../../modals/RegisrtationModal'

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
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode={'cover'} style={styles.backgroundImage}>
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
    marginTop: 15,
  },
  loginBtn: {
    backgroundColor: '#FFF',
    width: WIDTH - PADDING * 2,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    paddingBottom: 15,
  },
  signInBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: WIDTH - PADDING * 2,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    paddingBottom: 15,
  },
})
