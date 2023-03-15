import React from 'react'

import { KeyboardAvoidingView, Modal, Pressable, Text, TextInput, View } from 'react-native'

import { styles } from './modalStyles'

export const LoginModal = (props: LoginModalPropsType) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.loginModalVisible}
        onRequestClose={() => {
          props.setLoginModalVisible(!props.loginModalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Login</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.email}
                placeholder={'Email'}
                placeholderTextColor={'#6c6a6a'}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.email}
                placeholder={'Password'}
                placeholderTextColor={'#6c6a6a'}
                secureTextEntry={true}
              />
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setLoginModalVisible(!props.loginModalVisible)}
            >
              <Text style={styles.textStyle}>Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

type LoginModalPropsType = {
  loginModalVisible: boolean
  setLoginModalVisible: (data: boolean) => void
}
