import {useRoute} from '@react-navigation/native';
import Header from 'common/Header/Header';
import SinglePostComponent from 'components/SinglePostComponent/SinglePostComponent';
import React from 'react';

const SinglePostScreen = () => {
  const route = useRoute();
  const {id} = route.params as {id: string};

  return (
    <>
      <Header />
      <SinglePostComponent id={id} />
    </>
  );
};

export default SinglePostScreen;
