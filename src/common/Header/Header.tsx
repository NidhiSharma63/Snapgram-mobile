import React from 'react';
import {Text, View} from 'react-native';
import Logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <View>
      <Logo />
      <Text>Snapgram</Text>
    </View>
  );
};

export default Header;

// <Image
//       source={require('../../assets/images/logo.svg')}
//       style={{width: 200, height: 20}}
//     />
