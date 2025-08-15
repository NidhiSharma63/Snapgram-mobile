import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AppConstants} from 'constant/keys';
import useAuth from 'hooks/useAuth';
import {useCallback, useState} from 'react';

const useAuthComponent = (
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const navigation = useNavigation();
  const {useSignUp, useSignIn} = useAuth();
  const {mutateAsync: mutateSignUp, isPending: isSignUpLoading} = useSignUp();
  const {mutateAsync: mutateSignIn, isPending: isSignInLoading} = useSignIn();

  const isLoading = isSignUpLoading || isSignInLoading;

  const [userCreds, setUserCreds] = useState({
    username: '',
    email: '',
    password: '',
    avatar: null,
    uniqueBrowserId: Math.random().toString(36),
    bio: '',
  });

  const handleGetCreds = useCallback(() => {
    setUserCreds(prev => ({
      ...prev,
      uniqueBrowserId: Math.random().toString(36),
      username: '',
      email: 'john@gmail.com',
      password: 'john@123',
      avatar: null,
      bio: '',
    }));
  }, []);

  const handleNavigateToSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  const handleNavigateToSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const handleLogin = useCallback(async () => {
    try {
      const dataSignIn = await mutateSignIn(userCreds);
      await AsyncStorage.setItem(
        AppConstants.USER_DETAILS,
        JSON.stringify(dataSignIn),
      );
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  }, [userCreds, mutateSignIn, setIsLoggedIn]);

  const handleSignUp = useCallback(async () => {
    const dataSignIn = await mutateSignUp(userCreds);
    await AsyncStorage.setItem(
      AppConstants.USER_DETAILS,
      JSON.stringify(dataSignIn),
    );
    setIsLoggedIn(true);
  }, [userCreds, mutateSignUp, setIsLoggedIn]);

  return {
    handleNavigateToSignIn,
    handleNavigateToSignUp,
    handleGetCreds,
    userCreds,
    handleLogin,
    handleSignUp,
    isLoading,
  };
};

export default useAuthComponent;
