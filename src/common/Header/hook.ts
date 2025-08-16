import {useNavigation} from '@react-navigation/native';
import getUserDetails from 'lib/getUserDetails';
import {useCallback, useEffect, useState} from 'react';

const useHeader = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const data = await getUserDetails();
      setUserData(data);
    }

    getDetails();
  }, []);

  const handleNavigateToProfilePage = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return {handleNavigateToProfilePage, userData};
};

export default useHeader;
