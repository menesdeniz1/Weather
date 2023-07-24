import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import HomePhoto from './assets/home_alt_outline.svg';
import Frame from './assets/frame.svg';
import User from './assets/user.svg';
import Rectangle from './assets/rectangle.svg';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomHeader = () => (
  <View style={styles.headerContainer}>
    <Rectangle width={100} height={40} />
  </View>
);

const LoginCustomHeader = () => (
  <View style={styles.headerContainer}>
    <Rectangle width={100} height={40} />
  </View>
);

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      header: () => <CustomHeader />,
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <HomePhoto width={40} height={40} />
          </View>
        ),
      }} />
      <Tab.Screen name="Calendar" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Frame width={30} height={30} />
          </View>
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <User width={40} height={40} />
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('@isLoggedIn');
      setIsLoggedIn(value === 'true');
    } catch (e) {
      setIsLoggedIn(false);
    }
  };

  return (
    <NavigationContainer>
      {isLoggedIn === null ? null : isLoggedIn ? (
        <MyTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => <LoginCustomHeader /> }} />
          <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
  },
});

export default App;
