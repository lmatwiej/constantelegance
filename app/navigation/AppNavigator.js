import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import WardrobeNavigator from './WardrobeNavigator';
import DashboardNavigator from './DashboardNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
            name="Wardrobe"
            component={WardrobeNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="hanger" size={size} color={color} />
            }}
        />
        <Tab.Screen
            name="Services"
            component={DashboardNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <Octicons name="apps" size={size} color={color} />
            }}
        />
        <Tab.Screen
            name="Account"
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" size={size} color={color} />
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;