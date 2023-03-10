import React from 'react';
import {StyleSheet, View} from "react-native";
import {MainLogo} from "../svgIcons/MainLogo";
import {Button} from "../components/Button";
import {useAppNavigation} from "../types/navigationsTypes";

export const Splash = () => {
    const navigation = useAppNavigation()
    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                title={''}
                fontSize={20}
                fontWeight={undefined}
                color={''}
                onPress={() => {
                    navigation.navigate('Onboard')
                }}>
                <MainLogo/>
            </Button>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: '#FFF',
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});
