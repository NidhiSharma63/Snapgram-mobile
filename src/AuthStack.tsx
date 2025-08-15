import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from 'pages/SignInScreen';
import SignUpScreen from 'pages/SignUpScreen';
import React from 'react';
const Stack = createNativeStackNavigator();

export default function AuthStack({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn">
        {() => <SignInScreen setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp">
        {() => <SignUpScreen setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
