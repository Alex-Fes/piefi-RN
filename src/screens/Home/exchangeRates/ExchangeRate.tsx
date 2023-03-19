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
import { NUM_COLUMN, PADDING, WIDTH } from '../../../constants/constants'

export const ExchangeRate = () => {
  const renderItem: ListRenderItem<currentCurrencyDataType> = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.currencyItem}
        onPress={() => {
          Alert.alert(`Go to ${item.currencyName} page`)
        }}
      >
        <View style={styles.currency}>
          <Text style={styles.currencyIndex}>{item.currencyIndex}</Text>
          <Text style={styles.currencyName}>{item.currencyName}</Text>
        </View>
        <View style={styles.currencyValue}>
          <Text style={styles.currencyValueStyle}>{item.exchangeValue}</Text>
          <Text style={styles.currencyValueStyle}>{item.exchangeCurrency}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Курсы валют</Text>

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
          <Text style={styles.allCurrencyTitle}>Все валюты</Text>
          <Image
            style={styles.allCurrencyIcon}
            source={require('../../../../assets/icons/myProductsIcons/rightArrowIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#221C35',
    paddingVertical: 20,
  },
  currencyItem: {
    height: 112,
    width: (WIDTH - PADDING * 2) / NUM_COLUMN - 5,
    backgroundColor: '#dfe4f1',
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
    color: '#221C35',
  },
  currencyName: {
    fontWeight: '400',
    fontSize: 14,
    color: '#221C35',
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
    color: '#221C35',
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
    color: '#221C35',
  },
  allCurrencyIcon: {
    width: 16,
    height: 16,
    tintColor: '#221C35',
  },
})

export type currentCurrencyDataType = {
  currencyIndex: string
  currencyName: string
  exchangeValue: string
  exchangeCurrency: string
}
