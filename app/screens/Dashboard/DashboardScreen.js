import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors';
import ScreenHeader from '../../components/ScreenHeader';
import RecentActivity from '../../components/dashboard/RecentActivity';
import ServicesPanel from '../../components/dashboard/ServicesPanel';

function DashboardScreen(props) {
    return (
        <View style={styles.container}>
            <ScreenHeader name="Services" />
            <RecentActivity />
            <ServicesPanel />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light
    }
})

export default DashboardScreen;