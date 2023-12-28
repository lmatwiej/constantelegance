import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WardrobeScreen from '../screens/Wardrobe/WardrobeScreen';
import SelectPackageScreen from '../screens/Wardrobe/SelectPackageScreen';
import ViewCartScreen from '../screens/Wardrobe/ViewCartScreen';
import CheckoutScreen from '../screens/Wardrobe/CheckoutScreen';

const Stack = createNativeStackNavigator();

const WardrobeNavigator = () => (
    <Stack.Navigator initialRouteName="Current Wardrobe">
        <Stack.Screen name="Current Wardrobe" component={WardrobeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Shop" component={SelectPackageScreen} />
        <Stack.Screen name="Cart" component={ViewCartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
);

export default WardrobeNavigator;