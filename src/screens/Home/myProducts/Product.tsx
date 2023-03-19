import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ImageSourcePropType,
} from 'react-native'

export const Product = (props: ProductPropsType) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        Alert.alert(props.navigate)
      }}
    >
      <View style={styles.leftBox}>
        {props.cardNumber ? (
          <View style={[styles.iconBox, { backgroundColor: '#905EFF' }]}>
            <Image source={props.cardLogo} style={styles.iconBoxLogo} />
            <Image source={props.littleLogo} style={styles.iconBoxLittleLogo} />
            <Image source={props.bankSystemLogo} style={styles.iconBoxBankSystemLogo} />
            <Text style={styles.cardNumber}>•{props.cardNumber}</Text>
          </View>
        ) : (
          <View
            style={[
              styles.iconBox,
              { backgroundColor: '#1F1D28', justifyContent: 'center', alignItems: 'center' },
            ]}
          >
            <Image source={props.cardLogo} style={styles.productLogo} />
          </View>
        )}
        <View style={styles.infoBox}>
          <Text style={styles.productTitle}>{props.productTitle}</Text>
          <View style={styles.balanceBox}>
            <Text style={styles.productBalance}>{props.productBalance}</Text>
            <Text style={styles.currency}>{props.currentCurrency}</Text>
          </View>
        </View>
      </View>
      {props.investProfit && (
        <View style={styles.rightBox}>
          <View style={styles.profitBox}>
            <Image style={styles.arrow} source={props.arrow} />
            <Text style={styles.investValue}>{props.investProfit}%</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  )
}

export type ProductPropsType = {
  cardLogo: ImageSourcePropType
  bankSystemLogo: ImageSourcePropType
  arrow: ImageSourcePropType
  littleLogo: ImageSourcePropType
  cardNumber?: number
  navigate: string
  productTitle: string
  productBalance: string
  currentCurrency: string
  investProfit?: number
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#302A3B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 72,
    borderRadius: 20,
    position: 'relative',
    marginVertical: 4,
  },
  leftBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconBox: {
    width: 80,
    height: 64,
    borderRadius: 18,
    marginHorizontal: 4,
  },
  iconBoxLogo: {
    position: 'absolute',
    top: 0,
    left: 8,
  },
  iconBoxLittleLogo: {
    position: 'absolute',
    height: 10,
    width: 31,
    left: 10,
    top: 10,
  },
  iconBoxBankSystemLogo: {
    position: 'absolute',
    height: 13,
    width: 20,
    right: 9,
    bottom: 7,
  },
  cardNumber: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    height: 11,
    fontWeight: '700',
    fontSize: 11,
    color: '#FFF',
  },
  productLogo: {
    width: 20,
    height: 28,
  },
  infoBox: {
    paddingLeft: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#a4a1a9',
    opacity: 0.5,
  },
  balanceBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  productBalance: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
  },
  currency: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFF',
    marginLeft: 6,
  },
  rightBox: {},
  profitBox: {
    width: 44,
    height: 20,
    backgroundColor: '#40AE5F',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  arrow: {
    width: 5,
    height: 9,
  },
  investValue: {
    height: 11,
    fontSize: 11,
    fontWeight: '600',
    color: '#FFF',
    bottom: 1,
    marginLeft: 4,
  },
})
