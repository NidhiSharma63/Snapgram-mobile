import Header from 'common/Header/Header';
import People from 'components/PeopleComponent/People';
import React from 'react';
import {View} from 'react-native';

const PeopleScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <People />
    </View>
  );
};

export default PeopleScreen;
