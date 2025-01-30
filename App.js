import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ReservationScreen from "./screens/ReservationScreen";
import SignInScreen from "./screens/SignInScreen";
import PostScreen from "./screens/PostScreen"; // Ensure this is defined
import SettingsScreen from "./screens/SettingsScreen";
import CreatePostScreen from "./screens/CreatePostScreen"; // Ensure this is defined

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const loadApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        setTimeout(() => setAppIsReady(true), 2000); // Simulate loading
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    loadApp();
  }, []);

  if (!appIsReady) {
    return null; // Splash screen is shown
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reservations" component={ReservationScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Posts" component={PostScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
