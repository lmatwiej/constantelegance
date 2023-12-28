import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../config/colors';
import DonationsForm from '../../components/requestTab/DonationsForm';

const BackIcon = <AntDesign name='back' color={colors.primary_dark} size={35} style={{ marginLeft: 5 }} />

function DonationsOrderScreen(props) {
    return (
        <View style={styles.container}>
            <DonationsForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light
    }
})

export default DonationsOrderScreen;