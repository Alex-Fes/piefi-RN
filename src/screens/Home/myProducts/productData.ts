import { ProductPropsType } from './Product'

export const paymentData: ProductPropsType = {
  cardLogo: require('../../../../assets/icons/myProductsIcons/piefiLogo.png'),
  bankSystemLogo: require('../../../../assets/icons/myProductsIcons/masterCardIcon.png'),
  arrow: require('../../../../assets/icons/myProductsIcons/arrowUpIcon.png'),
  littleLogo: require('../../../../assets/piefi-logo–withback.png'),
  cardNumber: 2412,
  navigate: 'Go to "My balance"',
  productTitle: 'Платежный баланс',
  productBalance: '12 400.89',
  currentCurrency: 'EUR',
  investProfit: 12,
}
export const savingBalance: ProductPropsType = {
  cardLogo: require('../../../../assets/icons/myProductsIcons/savingBalance.png'),
  bankSystemLogo: require('../../../../assets/icons/myProductsIcons/masterCardIcon.png'),
  arrow: require('../../../../assets/icons/myProductsIcons/arrowUpIcon.png'),
  littleLogo: require('../../../../assets/piefi-logo–withback.png'),
  navigate: 'Go to "Payment balance"',
  productTitle: 'Сберигательный баланс',
  productBalance: '25 000',
  currentCurrency: 'EUR',
}
export const investment: ProductPropsType = {
  cardLogo: require('../../../../assets/icons/myProductsIcons/investmentsIcon.png'),
  bankSystemLogo: require('../../../../assets/icons/myProductsIcons/masterCardIcon.png'),
  arrow: require('../../../../assets/icons/myProductsIcons/arrowUpIcon.png'),
  littleLogo: require('../../../../assets/piefi-logo–withback.png'),
  navigate: 'Go to "Investments"',
  productTitle: 'Инвестиции',
  productBalance: '107.24',
  currentCurrency: 'EUR',
  investProfit: 12,
}
