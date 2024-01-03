import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import PanelItem from './PanelItem';
import AppText from '../AppText';
import colors from '../../config/colors';
import AuthContext from '../../auth/context';

const icons = [
    <Entypo name='ruler' color={colors.white} size={25} />,
    <MaterialIcons name='dry-cleaning' color={colors.white} size={30} />,
    <FontAwesome5 name='hand-holding-heart' color={colors.white} size={24} />,
    <FontAwesome name='exchange' color={colors.white} size={25} />
]

function ServicesPanel(props) {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    const handleNavigate = (service) => {
        if (user.eligibility[service] && user.packages.length > 0)
            navigation.navigate("Services", { screen: service })

        else if (user.packages.length > 0)
            Alert.alert("Order Already Exists", "An order for this service has already been placed. See active orders above for details.")

        else
            Alert.alert("Empty Wardrobe", "Your wardrobe is currently empty. You must first register a new package to request service.")
    }

    return (
        <>
            <View style={styles.headerRow}>
                <AppText style={styles.headerText}>Place New Order</AppText>
            </View>
            <View style={styles.row1}>
                <PanelItem
                    name="Alterations"
                    icon={icons[0]}
                    style={{ marginRight: 10 }}
                    onPress={() => handleNavigate("Alterations")}
                />
                <PanelItem
                    name="Cleaning"
                    icon={icons[1]}
                    style={{ marginLeft: 10 }}
                    onPress={() => handleNavigate("Cleaning")}
                />
            </View>
            <View style={styles.row2}>
                <PanelItem
                    name="Donations"
                    icon={icons[2]}
                    style={{ marginRight: 10 }}
                    onPress={() => handleNavigate("Donations")}
                />
                <PanelItem
                    name="Exchanges"
                    icon={icons[3]}
                    style={{ marginLeft: 10 }}
                    onPress={() => handleNavigate("Exchanges")}
                />
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    row1: {
        flexDirection: 'row',
        marginVertical: 20,
        width: "100%",
        paddingHorizontal: 20,
    },
    row2: {
        flexDirection: 'row',
        marginBottom: 20,
        width: "100%",
        paddingHorizontal: 20,
    },
    headerRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 25
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "600",
        color: colors.primary_dark,
    },
})

export default ServicesPanel;