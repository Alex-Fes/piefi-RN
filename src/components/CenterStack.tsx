import React from 'react';
import {View} from "react-native";
import {center} from "../styles/globalStyles";


type CenterStackPropsType = {
    children: React.ReactNode
}
export const CenterStack = ({children}: CenterStackPropsType) => {
    return (
        <View style={center.center}>
            {children}
        </View>
    );
};
