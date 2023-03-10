import React from 'react';
import {RootStackParamList} from "../types/navigationsTypes";
import {StyleSheet} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Onboard} from "./Onboard/Onboard";


const Stack = createNativeStackNavigator<RootStackParamList>()
export const Main = () => {
    return (
        // <View style={styles.container}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/*<Stack.Screen name={'Splash'} component={Splash}/>*/}
                <Stack.Screen name={'Onboard'} component={Onboard}/>
            </Stack.Navigator>
        // </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
