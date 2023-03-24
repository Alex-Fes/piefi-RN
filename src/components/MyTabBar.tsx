import React from 'react'

import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'

import {
  BG_COLOR_FOR_TAB_NAVIGATION,
  BG_COLOR_FOR_TAB_NAVIGATION_DARK,
  TINTCOLOR,
  TINTCOLOR_SECOND,
  WIDTH,
} from '../constants/constants'

const chatIcon = require('../../assets/icons/chatIcon.png')
const historyIcon = require('../../assets/icons/historyIcon.png')
const mainIcon = require('../../assets/icons/homeIcon.png')
const servicesIcon = require('../../assets/icons/servicesIcon.png')
const transferIcon = require('../../assets/icons/transferIcon.png')

export const MyTabBar = ({ state, descriptors, navigation }: any) => {
  const theme = useColorScheme()
  const isDarkTheme = theme === 'dark'

  const backgroundColor = isDarkTheme
    ? { backgroundColor: BG_COLOR_FOR_TAB_NAVIGATION_DARK, borderWidth: 0 }
    : { backgroundColor: BG_COLOR_FOR_TAB_NAVIGATION }

  return (
    <View style={[styles.container, backgroundColor]}>
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
                style={{
                  width: 32,
                  height: 32,
                  tintColor: isFocused ? TINTCOLOR : TINTCOLOR_SECOND,
                }}
              />
              <Text style={{ color: isFocused ? TINTCOLOR : TINTCOLOR_SECOND }}>{label}</Text>
            </TouchableOpacity>
          )
        }
      )}
    </View>
  )
}
// type MyTabBarPropsType = {
//   state: TabNavigationState<any>
//   descriptors: BottomTabDescriptorMap
//   navigation: NavigationHelpers<any, any>
// }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    opacity: 1,
    height: 86,
    width: WIDTH,
    position: 'absolute',
    bottom: -2,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: 'rgba(0, 0, 0, 0.02)',
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
