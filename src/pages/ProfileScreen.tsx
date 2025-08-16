import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from 'common/Header/CustomHeader';
import Profile from 'components/ProfileComponent/Profile';
import {AppConstants} from 'constant/keys';
import React from 'react';
import {Pressable, View} from 'react-native';
import Back from '../assets/images/back.svg';
import Logout from '../assets/images/logout.svg';

const ProfileScreen = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigation = useNavigation();
  const handleNavigateToBackScreen = () => {
    navigation.goBack();
  };
  const handleNavigateToLoginScreen = async () => {
    await AsyncStorage.removeItem(AppConstants.USER_DETAILS);
    setIsLoggedIn(false);
    // remove token
  };
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        rightElement={
          <Pressable onPress={handleNavigateToBackScreen}>
            <Back width={32} height={32} />
          </Pressable>
        }
        leftElement={
          <Pressable onPress={handleNavigateToLoginScreen}>
            <Logout width={32} height={32} />
          </Pressable>
        }
      />
      <Profile />
    </View>
  );
};

export default ProfileScreen;
