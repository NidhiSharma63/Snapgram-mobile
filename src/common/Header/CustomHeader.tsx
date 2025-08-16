import useHeader from 'common/Header/hook';
import style from 'common/Header/style';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';

const CustomHeader = ({
  rightElement,
  leftElement,
}: {
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
}) => {
  const {handleNavigateToProfilePage, userData} = useHeader();
  return (
    <View style={style.header}>
      {rightElement}
      <View style={[style.header, style.gap]}>
        {leftElement}
        <TouchableOpacity onPress={handleNavigateToProfilePage}>
          {userData?.avatar ? (
            <Image
              source={{uri: userData?.avatar}}
              style={{width: 32, height: 32, borderRadius: 16}}
            />
          ) : (
            <ProfilePlaceholder width={32} height={32} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
