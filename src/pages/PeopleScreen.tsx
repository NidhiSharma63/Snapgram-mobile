import {useNavigation} from '@react-navigation/native';
import CustomHeader from 'common/Header/CustomHeader';
import People from 'components/PeopleComponent/People';
import React from 'react';
import {Pressable, View} from 'react-native';
import Back from '../assets/images/back.svg';

const PeopleScreen = () => {
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
      <People />
    </View>
  );
};

export default PeopleScreen;
