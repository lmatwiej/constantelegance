import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../screens/Account/AccountScreen';
import UpdateContactScreen from '../screens/Account/UpdateContactScreen';
import UpdateAddressScreen from '../screens/Account/UpdateAddressScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator initialRouteName="Account Screen">
        <Stack.Screen name="Account Screen" component={AccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Update Contact" component={UpdateContactScreen} />
        <Stack.Screen name="Update Address" component={UpdateAddressScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;