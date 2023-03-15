import React, { ReactNode } from 'react'

import { Modal, ModalProps, StyleSheet, View } from 'react-native'

export const BasicModal = ({
  modalVisible,
  setModalVisible,
  children,
  children2,
  ...restProps
}: BasicModalPropsType) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        {...restProps}
        // animationType="slide"
        // transparent={true}
        // visible={modalVisible}
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible)
        // }}
      >
        {children}
        {children2}
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // width: WIDTH - PADDING * 2,
  },
})

type BasicModalPropsType = {
  modalVisible: boolean
  setModalVisible: (data: boolean) => void
  children: ReactNode
  children2?: ReactNode
} & ModalProps
