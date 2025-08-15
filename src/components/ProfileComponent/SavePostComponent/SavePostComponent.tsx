import style from 'components/ProfileComponent/style';
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
// import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
import useSavePostComponent from 'components/ProfileComponent/SavePostComponent/hook';
import ProfilePlaceholder from '../../../assets/images/profile-placeholder.svg';
const SavePostComponent = () => {
  const {usersData, posts, isLoading} = useSavePostComponent();

  const renderPost = ({item}: {item: any}) => {
    const findCurrentUser = usersData?.find(user => user?._id === item?.userId);
    return (
      <View style={style.explorePost}>
        {/* Image */}
        <Image source={{uri: item.file}} style={style.postImage} />
        {/* user data */}
        <View style={style.userDataAbsolute}>
          {item.userAvatar ? (
            <Image
              source={{uri: item.userAvatar}}
              style={{width: 24, height: 24, borderRadius: 12}}
            />
          ) : (
            <ProfilePlaceholder width={24} height={24} />
          )}
          <Text style={style.userName}>
            {findCurrentUser.username || 'Unknown'}
          </Text>
        </View>
      </View>
    );
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={style.saveTab}>
      <FlatList
        data={posts || []}
        keyExtractor={(item, index) => `${item._id}-${index}`}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default SavePostComponent;
