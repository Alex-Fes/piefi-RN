import { NavigationProp, useNavigation } from '@react-navigation/native'

export type RootStackParamList = {
  // Home: NavigatorScreenParams<NestedStackType>
  Splash: undefined
  //Details: undefined
  // Details: {
  //     id: number
  //     name: string
  // } | undefined
  Onboard: undefined
  Settings: undefined
}

// export type NestedStackType = {
//     Profile: undefined
//     Login: undefined
//     Registration: undefined
// }

// export type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()
