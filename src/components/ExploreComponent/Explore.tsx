import useExplore from 'components/ExploreComponent/hook';
import style from 'components/ExploreComponent/style';
import React from 'react';
import {FlatList, Image, Text, TextInput, View} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
import Search from '../../assets/images/search.svg';

const Explore = () => {
  const {data: posts, isLoading, usersData} = useExplore();

  const renderPost = ({item}: {item: any}) => {
    const findCurrentUser = usersData?.find(user => user?._id === item?.userId);
    return (
      <View style={style.explorePost}>
        {/* Image */}
        <Image source={{uri: item.file}} style={style.postImage} />
        {/* user data */}
        <View style={style.userData}>
          {item.userAvatar ? (
            <Image
              source={{uri: item.userAvatar}}
              style={{width: 24, height: 24, borderRadius: 12}}
            />
          ) : (
            <ProfilePlaceholder width={24} height={24} />
          )}
          <Text style={style.textPrimary}>
            {findCurrentUser?.username || 'Unknown'}
          </Text>
        </View>
      </View>
    );
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Search />
        <TextInput
          placeholder="Search posts"
          placeholderTextColor="#888"
          style={style.input}
        />
      </View>
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

export default Explore;
