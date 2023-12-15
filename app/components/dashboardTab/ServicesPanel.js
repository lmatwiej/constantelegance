import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import ScreenSection from '../ScreenSection';
import PanelItem from './PanelItem';
import colors from '../../config/colors';

const icons = [
    <Entypo name='ruler' color={colors.white} size={25} />,
    <MaterialIcons name='dry-cleaning' color={colors.white} size={30} />,
    <FontAwesome5 name='hand-holding-heart' color={colors.white} size={24} />,
    <FontAwesome name='exchange' color={colors.white} size={25} />
]

function ServicesPanel(props) {
    return (
        <ScreenSection name="Services Panel">
            <View style={styles.row1}>
                <PanelItem name="Alterations" icon={icons[0]} style={{ marginRight: 10 }} />
                <PanelItem name="Cleaning" icon={icons[1]} style={{ marginLeft: 10 }} />
            </View>
            <View style={styles.row2}>
                <PanelItem name="Donations" icon={icons[2]} style={{ marginRight: 10 }} />
                <PanelItem name="Exchanges" icon={icons[3]} style={{ marginLeft: 10 }} />
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