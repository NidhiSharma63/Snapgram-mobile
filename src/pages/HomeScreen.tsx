import CustomHeader from 'common/Header/CustomHeader';
import Home from 'components/HomeComponent/Home';
import React from 'react';
import {View} from 'react-native';
import Logo from '../assets/images/logo.svg';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader rightElement={<Logo width={32} height={32} />} />
      <View style={{flex: 1}}>
        <Home />
      </View>
    </View>
  );
};

export default HomeScreen;
