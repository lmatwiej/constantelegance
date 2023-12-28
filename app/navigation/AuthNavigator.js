import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/Authorization/LoginScreen';
import NewAccountScreen from '../screens/Registration/NewAccountScreen';
import ContactInputScreen from '../screens/Registration/ContactInputScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={NewAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={ContactInputScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default AuthNavigator;