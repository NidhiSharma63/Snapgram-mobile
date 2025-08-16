import {useNavigation} from '@react-navigation/native';
import CustomHeader from 'common/Header/CustomHeader';
import CreatePost from 'components/CreatePostComponent/CreatePost';
import React from 'react';
import {Pressable, View} from 'react-native';
import Back from '../assets/images/back.svg';

const CreatePostScreen = () => {
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
    <CreatePost />
  </View>
);
};

export default CreatePostScreen;
