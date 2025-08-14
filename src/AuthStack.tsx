import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from 'pages/SignInScreen';
import SignUpScreen from 'pages/SignUpScreen';
import React from 'react';
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
