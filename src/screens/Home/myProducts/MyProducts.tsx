import React from 'react'

import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { PADDING, TEXT_COLOR, WIDTH } from '../../../constants/constants'

import { Product } from './Product'
import { investment, paymentData, savingBalance } from './productData'

export const MyProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.text}>Мои продукты</Text>
        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() => {
            Alert.alert('Go to settings')
          }}
        >
          <Image
            style={styles.settingsIcon}
            source={require('../../../../assets/icons/settingsIcon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.productBox}>
        <Product
          bankSystemLogo={paymentData.bankSystemLogo}
          littleLogo={paymentData.littleLogo}
          productBalance={paymentData.productBalance}
          arrow={paymentData.arrow}
          productTitle={paymentData.productTitle}
          navigate={paymentData.navigate}
          cardLogo={paymentData.cardLogo}
          cardNumber={paymentData.cardNumber}
          currentCurrency={paymentData.currentCurrency}
        />
        <Product
          bankSystemLogo={savingBalance.bankSystemLogo}
          littleLogo={savingBalance.littleLogo}
          productBalance={savingBalance.productBalance}
          arrow={savingBalance.arrow}
          productTitle={savingBalance.productTitle}
          navigate={savingBalance.navigate}
          cardLogo={savingBalance.cardLogo}
          currentCurrency={savingBalance.currentCurrency}
        />
        <Product
          bankSystemLogo={investment.bankSystemLogo}
          littleLogo={investment.littleLogo}
          productBalance={investment.productBalance}
          arrow={investment.arrow}
          productTitle={investment.productTitle}
          navigate={investment.navigate}
          cardLogo={investment.cardLogo}
          currentCurrency={investment.currentCurrency}
          investProfit={investment.investProfit}
        />
      </View>
      <TouchableOpacity
        style={styles.allProductsBox}
        onPress={() => {
          Alert.alert('Watch all products')
        }}
      >
        <Text style={styles.secondTitle}>Смотреть все</Text>
        <Image
          style={styles.secondTitleIcon}
          source={require('../../../../assets/icons/myProductsIcons/rightArrowIcon.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: PADDING,
    paddingTop: 20,
  },
  text: {
    color: TEXT_COLOR,
    fontSize: 26,
    fontWeight: '700',
  },
  settingsBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    tintColor: '#b8b6be',
    width: 20,
    height: 20,
    top: 2,
  },
  productBox: {
    width: WIDTH - PADDING * 2,
    marginHorizontal: PADDING,
  },
  allProductsBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 16,
    marginVertical: 10,
  },
  secondTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: TEXT_COLOR,
  },
  secondTitleIcon: {
    width: 16,
    height: 16,
  },
})
