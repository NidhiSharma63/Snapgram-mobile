import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import useAuth from 'hooks/useAuth';
import {useCallback, useState} from 'react';

const useAuthComponent = (
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const navigation = useNavigation();
  const {useSignUp, useSignIn} = useAuth();
  const {mutateAsync: mutateSignUp, isPending: isSignUpLoading} = useSignUp();
  const {mutateAsync: mutateSignIn, isPending: isSignInLoading} = useSignIn();

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
      await AsyncStorage.setItem('userData', JSON.stringify(dataSignIn));
        setIsLoggedIn(true);

      // navigation.navigate('Tabs', {screen: 'Home'});
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'Tabs'}],
      // });
    } catch (error) {
      console.error(error);
    }
  }, [userCreds, mutateSignIn, navigation]);

  const handleSignUp = useCallback(async () => {
    const dataSignIn = await mutateSignUp(userCreds);
    await AsyncStorage.setItem('userData', JSON.stringify(dataSignIn));
    // navigation.navigate('Tabs', {screen: 'Home'});
    setIsLoggedIn(true);
  }, [userCreds, mutateSignUp, navigation]);

  return {
    handleNavigateToSignIn,
    handleNavigateToSignUp,
    handleGetCreds,
    userCreds,
    handleLogin,
    handleSignUp,
    isSignInLoading,
    isSignUpLoading,
  };
};

export default useAuthComponent;
