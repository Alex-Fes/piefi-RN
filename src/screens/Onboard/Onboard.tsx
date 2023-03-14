import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from "react-native";
import {Button} from "../../components/Button";



type ViewType = 'first' | 'second'

export const Onboard = () => {
    const [view, setView] = useState<ViewType>('first')
    const [language, setLanguage] = useState('RU')

    const backgroundImage = view === 'first'
        ? require('../../../assets/Mesh-gradient.png')
        : require('../../../assets/Mesh-gradient1.png')
    const logoWhiteback = require('../../../assets/piefi-logo–withback.png')


    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                resizeMode={"cover"}
                style={styles.backgroundImage}>
                <View style={styles.head}>
                    <Image source={logoWhiteback}/>

                    <Button
                        style={styles.changeLangBtn}
                        title={language}
                        fontSize={14}
                        fontWeight={'600'}
                        color={'#fff'}/>
                </View>
            </ImageBackground>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    head: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 70,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    changeLangBtn: {
        height: 40,
        width: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 12,
    }
});
