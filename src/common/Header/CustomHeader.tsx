import useHeader from 'common/Header/hook';
import style from 'common/Header/style';
import React from 'react';
import {View} from 'react-native';

const CustomHeader = ({
  setIsLoggedIn,
  rightElement,
  leftElement,
}: {
  setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
}) => {
  const {handleNavigateToProfilePage} = useHeader();
  return (
    <View style={style.header}>
      {rightElement}
      {leftElement}
      {/* <View style={[style.header, style.gap]}>
        <Pressable onPress={handleLogout}>
          <LogoOut width={28} height={28} />
        </Pressable>
        <TouchableOpacity onPress={handleNavigateToProfilePage}>
          <ProfilePlaceholder width={32} height={32} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default CustomHeader;
