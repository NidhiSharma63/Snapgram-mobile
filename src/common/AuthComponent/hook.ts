import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

const useAuthComponent = () => {
  const navigation = useNavigation();
  const handleNavigateToSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  const handleNavigateToSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);


  const handleLogin = useCallback(() => {
    
  }, []);
  return {handleNavigateToSignIn, handleNavigateToSignUp};
};

export default useAuthComponent;
