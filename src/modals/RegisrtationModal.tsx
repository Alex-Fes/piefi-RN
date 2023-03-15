import React from 'react'

import { Modal, Pressable, Text, TextInput, View } from 'react-native'

import { styles } from './modalStyles'

export const RegistrationModal = (props: RegistrationModalPropsType) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.RegisterModalVisible}
        onRequestClose={() => {
          props.setRegisterModalVisible(!props.RegisterModalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Registration</Text>
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
            <View style={styles.input}>
              <TextInput
                style={styles.email}
                placeholder={'Confirm password'}
                placeholderTextColor={'#6c6a6a'}
                secureTextEntry={true}
              />
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setRegisterModalVisible(!props.RegisterModalVisible)}
            >
              <Text style={styles.textStyle}>Register</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

type RegistrationModalPropsType = {
  RegisterModalVisible: boolean
  setRegisterModalVisible: (data: boolean) => void
}
