import Header from 'common/Header/Header';
import Profile from 'components/ProfileComponent/Profile';
import React from 'react';
import {View} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Profile />
    </View>
  );
};

export default ProfileScreen;
