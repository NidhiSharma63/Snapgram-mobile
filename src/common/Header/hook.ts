import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

const useHeader = () => {
  const navigation = useNavigation();

  const handleNavigateToProfilePage = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return {handleNavigateToProfilePage};
};

export default useHeader;
