import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import ScreenSection from '../ScreenSection';
import PanelItem from './PanelItem';
import colors from '../../config/colors';
import AuthContext from '../../auth/context';

const icons = [
    <Entypo name='ruler' color={colors.white} size={25} />,
    <MaterialIcons name='dry-cleaning' color={colors.white} size={30} />,
    <FontAwesome5 name='hand-holding-heart' color={colors.white} size={24} />,
    <FontAwesome name='exchange' color={colors.white} size={25} />
]

const screens = {

}

function ServicesPanel(props) {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    const handleNavigate = (service) => {
        if (user.eligibility[service])
            navigation.navigate("Services", { screen: service })

        else
            Alert.alert(" Service Unavailable", "Each service can only be requested once at a time. An order for this service has already been placed.")
    }

    return (
        <ScreenSection name="Request New Service">
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

        </ScreenSection>
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
    }
})

export default ServicesPanel;