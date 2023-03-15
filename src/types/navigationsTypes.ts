import { NavigationProp, NavigatorScreenParams, useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Onboard: undefined
  Home: NavigatorScreenParams<NestedStackType>
}

export type NestedStackType = {
  FirstScreen: undefined
  History: undefined
  Payment: undefined
  Services: undefined
  Chat: undefined
}

export type FirstScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()
