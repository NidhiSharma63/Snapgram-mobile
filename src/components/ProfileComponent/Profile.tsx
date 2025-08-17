import {useNavigation} from '@react-navigation/native';
import useHomeComponent from 'components/HomeComponent/hook';
import ProfileTabs from 'components/ProfileComponent/ProfileTab/ProfileTab';
import style from 'components/ProfileComponent/style';
import React, {useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
const Profile = () => {
  const navigation = useNavigation();
  const handleNavigateToUpdateProfile = useCallback(() => {
    navigation.navigate('UpdateProfile');
  }, [navigation]);
  const {userDetails} = useHomeComponent();
  return (
    <>
      <View style={style.container}>
        <ProfilePlaceholder />
        {/*  */}
        <View style={style.userData}>
          <Text style={style.textPrimary}>{userDetails?.username}</Text>
          <Text style={style.textSecondary}>{userDetails?.email}</Text>
          <Text style={[style.textSecondary, {marginTop: 5}]}>Bio</Text>
          <Text style={style.textSecondary}>{userDetails?.bio}</Text>
        </View>
        {/* Edit button */}
        <Pressable
          style={style.editButtonContainer}
          onPress={handleNavigateToUpdateProfile}>
          <Text style={style.buttonText}>Edit Profile</Text>
        </Pressable>
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
