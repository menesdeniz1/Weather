import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';


import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  // Check login status on app start
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Function to check login status
  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('@isLoggedIn');
      setIsLoggedIn(value === 'true');
    } catch (e) {
      // Handle error reading data
      setIsLoggedIn(false);
    }
  };

  return (
    <><NavigationContainer>
      {isLoggedIn === null ? null : isLoggedIn ? (
        <MyTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer></>
  );
};

export default App;
