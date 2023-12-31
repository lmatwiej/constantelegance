import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../config/colors';
import AlterationsForm from '../../components/service_forms/AlterationsForm';

const BackIcon = <AntDesign name='back' color={colors.primary_dark} size={35} style={{ marginLeft: 5 }} />

function AlterationsOrderScreen(props) {
    return (
        <View style={styles.container}>
            <AlterationsForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light
    }
})

export default AlterationsOrderScreen;