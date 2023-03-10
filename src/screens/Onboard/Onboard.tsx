import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from "react-native";


type ViewType = 'first' | 'second'

export const Onboard = () => {
    const [view, setView] = useState<ViewType>('first')

    const image = view === 'first'
        ? {uri: require('../../../assets/Mesh-gradient.png')}
        : {uri: require('../../../assets/Mesh-gradient1.png')}

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.backgroundImage}
            >
                <Text>Onboard</Text>
            </ImageBackground>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',

    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        // justifyContent: 'center',
    }
});
