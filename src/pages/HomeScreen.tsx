import CustomHeader from 'common/Header/CustomHeader';
import Home from 'components/HomeComponent/Home';
import getUserDetails from 'lib/getUserDetails';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Logo from '../assets/images/logo.svg';
import ProfilePlaceholder from '../assets/images/profile-placeholder.svg';

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const data = await getUserDetails();
      setUserData(data);
    }

    getDetails();
  }, []);

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        rightElement={<Logo width={32} height={32} />}
        leftElement={
          userData?.avatar ? (
            <Image
              source={{uri: userData?.avatar}}
              style={{width: 32, height: 32, borderRadius: 16}}
            />
          ) : (
            <ProfilePlaceholder width={32} height={32} />
          )
        }
      />
      <Home />
    </View>
  );
};

export default HomeScreen;
