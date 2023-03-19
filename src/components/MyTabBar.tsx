import React from 'react'

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { WIDTH } from '../constants/constants'

const chatIcon = require('../../assets/icons/chatIcon.png')
const historyIcon = require('../../assets/icons/historyIcon.png')
const mainIcon = require('../../assets/icons/homeIcon.png')
const servicesIcon = require('../../assets/icons/servicesIcon.png')
const transferIcon = require('../../assets/icons/transferIcon.png')

export const MyTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map(
        (
          route: { key: string | number; name: any },
          index: { toString: () => React.Key | null | undefined }
        ) => {
          const { options } = descriptors[route.key]
          const label =
            // eslint-disable-next-line no-nested-ternary
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          let iconName

          switch (route.name) {
            case 'Home':
              iconName = mainIcon
              break
            case 'History':
              iconName = historyIcon
              break
            case 'Payment':
              iconName = transferIcon
              break
            case 'Services':
              iconName = servicesIcon
              break
            case 'Chat':
              iconName = chatIcon
              break
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved

              navigation.navigate({ name: route.name, merge: true })
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.labelContainer}
              key={index.toString()}
            >
              <Image
                source={iconName}
                resizeMode={'contain'}
                style={{ width: 32, height: 32, tintColor: isFocused ? '#8854FA' : '#b8b6be' }}
              />
              <Text style={{ color: isFocused ? '#8854FA' : '#b8b6be' }}>{label}</Text>
            </TouchableOpacity>
          )
        }
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: 86,
    width: WIDTH,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 20,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  labelContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 8,
    bottom: 10,
    marginHorizontal: 5,
  },
})
