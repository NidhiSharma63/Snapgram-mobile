import Header from 'common/Header/Header';
import Home from 'components/HomeComponent/Home';
import React from 'react';
import {View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Home />
    </View>
  );
};

export default HomeScreen;
