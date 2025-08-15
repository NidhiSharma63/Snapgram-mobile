import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AuthStack from 'AuthStack';
import Main from 'main';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Toast from 'react-native-toast-message';

const RootStack = createNativeStackNavigator();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
      refetchOnWindowFocus: true,
    },
  },
});

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setIsLoggedIn(!!token);
      setIsLoading(false);
    };
    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          {isLoggedIn ? (
            <RootStack.Screen name="MainTabs">
              {() => <Main setIsLoggedIn={setIsLoggedIn} />}
            </RootStack.Screen>
          ) : (
            <RootStack.Screen name="AuthStack">
              {() => <AuthStack setIsLoggedIn={setIsLoggedIn} />}
            </RootStack.Screen>
          )}
        </RootStack.Navigator>
        <Toast />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
