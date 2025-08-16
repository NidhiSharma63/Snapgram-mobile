import {useNavigation, useRoute} from '@react-navigation/native';
import CustomHeader from 'common/Header/CustomHeader';
import SinglePostComponent from 'components/SinglePostComponent/SinglePostComponent';
import React from 'react';
import {Pressable} from 'react-native';
import Back from '../assets/images/back.svg';

const SinglePostScreen = () => {
  const route = useRoute();
  const {id} = route.params as {id: string};
  const navigation = useNavigation();
  const handleNavigateToBackScreen = () => {
    navigation.goBack();
  };
  return (
    <>
      <CustomHeader
        rightElement={
          <Pressable onPress={handleNavigateToBackScreen}>
            <Back width={32} height={32} />
          </Pressable>
        }
      />
      <SinglePostComponent id={id} />
    </>
  );
};

export default SinglePostScreen;
