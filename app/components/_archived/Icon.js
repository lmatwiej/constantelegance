import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View } from 'react-native'

function Icon({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff"
}) {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size / 2,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
        </View>
    );
}

export default Icon;