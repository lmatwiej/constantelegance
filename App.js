import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AuthContext from './app/auth/context';

const user_variable = {
  "_id": "658c58e04427f69eb35e39d6",
  "name": "Tadeusz Matwiejczyk",
  "password": "password2",
  "contact": {
    "email": "tmatwiejczyk@gmail.com",
    "mobile": "9732706811"
  },
  "locations": [
    {
      "label": "Home",
      "address": "4 Timothy Ct",
      "city": "Morristown",
      "state": "NJ",
      "zip": "07960"
    }
  ],
  packages: [
    {
      "type": 0,
      "tailoring_count": 2,
      "cleaning_count": 2
    }
  ],
  "orders": [
    {
      "type": "Tailoring",
      "packageId": 0,
      "location": "Home",
      "created_date": "12/27/2023",
      "pickup_date": "12/31/2023",
      "pickup_time": "11:00am",
      "service_rep": "To Be Assigned",
      "service_rep_mobile": "9732706811"
    }
  ]
}

export default function App() {
  const [user, setUser] = useState(user_variable);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// {user ? <AppNavigator /> : <AuthNavigator />}
// { "email": "lukaszjmat@gmail.com", "iat": 1703264622, "name": "Lukasz Matwiejczyk", "userId": 1 }