import React from 'react'

import {
  Alert,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { currentCurrencyData } from '../../../carouselData/onboardData'
import {
  BG_COLOR_FOR_ITEM,
  BG_COLOR_FOR_ITEM_DARK,
  NUM_COLUMN,
  PADDING,
  TEXT_COLOR,
  TEXT_COLOR_SECOND,
  WIDTH,
} from '../../../constants/constants'

export const ExchangeRate = (props: ExchangeRatePropsType) => {
  const textColor = props.isDarkTheme ? { color: TEXT_COLOR } : { color: TEXT_COLOR_SECOND }
  const tintColor = props.isDarkTheme ? { tintColor: TEXT_COLOR } : { tintColor: TEXT_COLOR_SECOND }
  const backgroundColor = props.isDarkTheme
    ? { backgroundColor: BG_COLOR_FOR_ITEM_DARK }
    : { backgroundColor: BG_COLOR_FOR_ITEM }
  const renderItem: ListRenderItem<currentCurrencyDataType> = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.currencyItem, backgroundColor]}
        onPress={() => {
          Alert.alert(`Go to ${item.currencyName} page`)
        }}
      >
        <View style={styles.currency}>
          <Text style={[styles.currencyIndex, textColor]}>{item.currencyIndex}</Text>
          <Text style={[styles.currencyName, textColor]}>{item.currencyName}</Text>
        </View>
        <View style={styles.currencyValue}>
          <Text style={[styles.currencyValueStyle, textColor]}>{item.exchangeValue}</Text>
          <Text style={[styles.currencyValueStyle, textColor]}>{item.exchangeCurrency}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, textColor]}>Курсы валют</Text>

      <FlatList
        data={currentCurrencyData}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={NUM_COLUMN}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
      <View>
        <TouchableOpacity
          style={styles.allCurrencyBtn}
          onPress={() => {
            Alert.alert(`Go to "All currency's" page`)
          }}
        >
          <Text style={[styles.allCurrencyTitle, textColor]}>Все валюты</Text>
          <Image
            style={[styles.allCurrencyIcon, tintColor]}
            source={require('../../../../assets/icons/myProductsIcons/rightArrowIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
type ExchangeRatePropsType = {
  isDarkTheme: boolean
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    paddingVertical: 20,
  },
  currencyItem: {
    height: 112,
    width: (WIDTH - PADDING * 2) / NUM_COLUMN - 5,

    borderRadius: 20,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  currencyBox: {},
  currency: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  currencyIndex: {
    fontWeight: '500',
    fontSize: 20,
  },
  currencyName: {
    fontWeight: '400',
    fontSize: 14,

    opacity: 0.56,
  },
  currencyValue: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  currencyValueStyle: {
    fontWeight: '600',
    fontSize: 16,
    paddingRight: 6,
  },
  allCurrencyBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  allCurrencyTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  allCurrencyIcon: {
    width: 16,
    height: 16,
  },
})

export type currentCurrencyDataType = {
  currencyIndex: string
  currencyName: string
  exchangeValue: string
  exchangeCurrency: string
}
