import { NavigationProp, NavigatorScreenParams, useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Onboard: undefined
  FirstScreen: NavigatorScreenParams<NestedTabType>
}

export type NestedTabType = {
  Home: undefined
  History: undefined
  Payment: undefined
  Services: undefined
  Chat: undefined
}

export type FirstScreenProps = NativeStackScreenProps<RootStackParamList, 'FirstScreen'>

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()
