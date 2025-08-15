import useHeader from 'common/Header/hook';
import style from 'common/Header/style';
import React from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/images/logo.svg';
import LogoOut from '../../assets/images/logout.svg';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';

const Header = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {handleNavigateToProfilePage, handleLogout} = useHeader(setIsLoggedIn);
  return (
    <View style={style.header}>
      <Logo width={32} height={32} />
      <View style={[style.header, style.gap]}>
        <Pressable onPress={handleLogout}>
          <LogoOut width={28} height={28} />
        </Pressable>
        <TouchableOpacity onPress={handleNavigateToProfilePage}>
          <ProfilePlaceholder width={32} height={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
