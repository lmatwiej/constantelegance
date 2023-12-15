import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';
import ScreenHeader from '../components/ScreenHeader';
import AlterationsForm from '../components/requestTab/AlterationsForm';

const BackIcon = <AntDesign name='back' color={colors.primary_dark} size={35} style={{ marginLeft: 5 }} />

function AlterationsScreen(props) {
    return (
        <View style={styles.container}>
            <ScreenHeader name="New Alteration" IconComponentPanel={BackIcon} />
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

export default AlterationsScreen;