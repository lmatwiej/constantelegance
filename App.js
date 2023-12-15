import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useDimensions } from '@react-native-community/hooks'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import TestingStyleScreen from './app/screens/TestingStyleScreen';
import AppButton from './app/components/AppButton';
import WardrobeScreen from './app/screens/WardrobeScreen';
import WardrobeDetailsScreen from './app/screens/WardrobeDetailsScreen';
import AccountScreen from './app/screens/AccountScreen';
import ImageDemoScreen from './app/screens/ImageDemoScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import AlterationsScreen from './app/screens/AlterationsScreen';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AlterationsScreen />
    </GestureHandlerRootView>
  );
}