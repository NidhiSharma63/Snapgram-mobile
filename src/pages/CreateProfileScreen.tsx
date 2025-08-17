import CustomHeader from 'common/Header/CustomHeader';
import CreateProfileComponent from 'components/CreateProfileComponent/CreateProfileComponent';
import React from 'react';
import {View} from 'react-native';
import Back from '../assets/images/back.svg';

const CreateProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader leftElement={<Back width={32} height={32} />} />
      <CreateProfileComponent />
    </View>
  );
};

export default CreateProfileScreen;
