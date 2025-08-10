import style from 'common/Header/style';
import React from 'react';
import {View} from 'react-native';
import Logo from '../../assets/images/logo.svg';
import LogoOut from '../../assets/images/logout.svg';
import ProfilePlaceholderCopy from '../../assets/images/profile-placeholder copy.svg';

const Header = () => {
  return (
    <View style={style.header}>
      <Logo width={32} height={32} />
      <View style={[style.header, style.gap]}>
        <LogoOut width={28} height={28} />
        <ProfilePlaceholderCopy width={32} height={32} />
      </View>
    </View>
  );
};

export default Header;
