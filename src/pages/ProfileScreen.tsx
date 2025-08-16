import {useNavigation} from '@react-navigation/native';
import CustomHeader from 'common/Header/CustomHeader';
import Profile from 'components/ProfileComponent/Profile';
import React from 'react';
import {Pressable, View} from 'react-native';
import Back from '../assets/images/back.svg';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleNavigateToBackScreen = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        rightElement={
          <Pressable onPress={handleNavigateToBackScreen}>
            <Back width={32} height={32} />
          </Pressable>
        }
      />
      <Profile />
    </View>
  );
};

export default ProfileScreen;
