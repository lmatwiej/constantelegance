import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from '../AppText';

const icons = {
    "Alterations": <Entypo name='ruler' color={colors.white} size={20} />,
    "Cleaning": <MaterialIcons name='dry-cleaning' color={colors.white} size={30} />,
    "Donations": <FontAwesome5 name='hand-holding-heart' color={colors.white} size={24} />,
    "Exchanges": <FontAwesome name='exchange' color={colors.white} size={25} />
}

function ActiveOrderIcon({ order }) {
    const navigation = useNavigation();

    return (
        <>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Services", { screen: 'View Order', params: { order: order } })}>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        {icons[order.service]}
                    </View>
                    <AppText style={styles.labelText}>{order.service}</AppText>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        alignItems: 'center',
        marginHorizontal: 15
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: colors.panel1
    },
    labelText: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.grey,
        paddingTop: 5,
    },

})

export default ActiveOrderIcon;