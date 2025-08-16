import {useNavigation} from '@react-navigation/native';
import CustomHeader from 'common/Header/CustomHeader';
import Explore from 'components/ExploreComponent/Explore';
import React from 'react';
import {Pressable, View} from 'react-native';
import Back from '../assets/images/back.svg';

const ExploreScreen = () => {
  const navigation = useNavigation();
  const handleNavigateToBackScreen = () => {
    navigation.goBack();
  };
  return (
    <View>
      <CustomHeader
        rightElement={
          <Pressable onPress={handleNavigateToBackScreen}>
            <Back width={32} height={32} />
          </Pressable>
        }
      />
      <Explore />
    </View>
  );
};

export default ExploreScreen;
