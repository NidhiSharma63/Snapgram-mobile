import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AppConstants} from 'constant/keys';
import {useCallback} from 'react';

const useHeader = (
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const navigation = useNavigation();

  const handleNavigateToProfilePage = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  const handleLogout = useCallback(async () => {
    await AsyncStorage.removeItem(AppConstants.USER_DETAILS);
    // move to login
    // navigation.navigate('AuthStack');
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);
  return {handleNavigateToProfilePage, handleLogout};
};

export default useHeader;
