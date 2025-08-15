import Header from 'common/Header/Header';
import Home from 'components/HomeComponent/Home';
import React from 'react';
import {View} from 'react-native';

const HomeScreen = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <View style={{flex: 1}}>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <Home />
    </View>
  );
};

export default HomeScreen;
