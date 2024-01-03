import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

const user_variable = {
  _id: "658c58e04427f69eb35e39d6",
  name: "Tadeusz Matwiejczyk",
  password: "password2",
  contact: {
    email: "tmatwiejczyk@gmail.com",
    mobile: "(973) 270-6811"
  },
  home: {
    address: "4 Timothy Ct",
    city: "Morristown",
    state: "NJ",
    zip: "07960"
  },
  other_locations: [
    {
      label: "Work",
      address: "5 Timothy Ct",
      city: "Morris Plains",
      state: "NY",
      zip: "07961"
    }
  ],
  packages: [
    {
      type: 0,
      tailoring_count: 2,
      cleaning_count: 2
    }
  ],
  orders: [
    {
      service: "Alterations",
      package: 0,
      status: "Delivery",
      location: "Home",
      date: "12/31/2023",
      time: "11:00am",
      service_rep: "To Be Assigned",
      service_rep_mobile: "(973) 270-6811"
    },
    {
      service: "Cleaning",
      package: 1,
      status: "Pickup",
      location: "Home",
      date: "12/31/2023",
      time: "11:00am",
      service_rep: "To Be Assigned",
      service_rep_mobile: "(973) 270-6811"
    },
  ],
  eligibility: {
    Alterations: false,
    Cleaning: false,
    Donations: true,
    Exchanges: true
  }
}

export default function App() {
  const [user, setUser] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const account = await authStorage.getUser();
    setUser(account);
  }

  if (!isReady)
    return <AppLoading startAsync={restoreToken} onError={() => setUser(false)} onFinish={() => setIsReady(true)} />


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}