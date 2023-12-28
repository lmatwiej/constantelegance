import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import AlterationsOrderScreen from '../screens/Dashboard/AlterationsOrderScreen';
import CleaningOrderScreen from '../screens/Dashboard/CleaningOrderScreen';
import DonationsOrderScreen from '../screens/Dashboard/DonationsOrderScreen';

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => (
    <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Request Alterations" component={AlterationsOrderScreen} />
        <Stack.Screen name="Request Cleaning" component={CleaningOrderScreen} />
        <Stack.Screen name="Make Donations" component={DonationsOrderScreen} />
    </Stack.Navigator>
);

export default DashboardNavigator;