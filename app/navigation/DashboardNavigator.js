import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import AlterationsOrderScreen from '../screens/Dashboard/AlterationsOrderScreen';
import CleaningOrderScreen from '../screens/Dashboard/CleaningOrderScreen';
import DonationsOrderScreen from '../screens/Dashboard/DonationsOrderScreen';
import ExchangesOrderScreen from '../screens/Dashboard/ExchangesOrderScreen';
import ViewOrderScreen from '../screens/Dashboard/ViewOrderScreen';

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => (
    <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Alterations" component={AlterationsOrderScreen} />
        <Stack.Screen name="Cleaning" component={CleaningOrderScreen} />
        <Stack.Screen name="Donations" component={DonationsOrderScreen} />
        <Stack.Screen name="Exchanges" component={ExchangesOrderScreen} />
        <Stack.Screen name="View Order" component={ViewOrderScreen} />
    </Stack.Navigator>
);

export default DashboardNavigator;