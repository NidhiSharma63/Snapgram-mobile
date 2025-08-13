import ProfileTabs from 'components/ProfileComponent/ProfileTab/ProfileTab';
import style from 'components/ProfileComponent/style';
import React from 'react';
import {Text, View} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';

const Profile = () => {
  return (
    <>
      <View style={style.container}>
        <ProfilePlaceholder />
        {/*  */}
        <View style={style.userData}>
          <Text style={style.textPrimary}>Nidhi sharma</Text>
          <Text style={style.textSecondary}>nidhisharma@gmail.com</Text>
          <Text style={[style.textSecondary, {marginTop: 5}]}>Bio</Text>
          <Text style={style.textSecondary}>Coder</Text>
        </View>
        {/*  */}
        <View style={style.stats}>
          <View style={style.stat}>
            <Text style={style.count}>20</Text>
            <Text style={style.label}>Followers</Text>
          </View>
          <View style={style.stat}>
            <Text style={style.count}>20</Text>
            <Text style={style.label}>Following</Text>
          </View>
        </View>
        {/*  */}
        {/* Top Tabs for Like & Save */}
      </View>
      <View style={{flex: 1}}>
        <ProfileTabs />
      </View>
    </>
  );
};

export default Profile;
