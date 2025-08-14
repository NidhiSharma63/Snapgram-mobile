// App.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient} from '@tanstack/react-query';
import AuthStack from 'AuthStack';
import Main from 'main';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Toast from 'react-native-toast-message';

// Create a client
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
      {isLoggedIn ? <Main /> : <AuthStack />}
      {/* ... */}
      <Toast position="bottom" bottomOffset={20} />
    </NavigationContainer>
  );
}
