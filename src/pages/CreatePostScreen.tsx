import Header from 'common/Header/Header';
import CreatePost from 'components/CreatePostComponent/CreatePost';
import React from 'react';
import {View} from 'react-native';

const CreatePostScreen = () => {
  return (
    <View>
      <Header />
      <CreatePost />
    </View>
  );
};

export default CreatePostScreen;
