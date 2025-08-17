import useExplore from 'components/ExploreComponent/hook';
import style from 'components/ExploreComponent/style';
import colors from 'constant/color';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
import Search from '../../assets/images/search.svg';

const Explore = () => {
  const {
    data: posts,
    isLoading,
    usersData,
    handleNavigateToSinglePost,
  } = useExplore();

  const renderPost = ({item}: {item: any}) => {
    const findCurrentUser = usersData?.find(user => user?._id === item?.userId);
    return (
      <Pressable onPress={() => handleNavigateToSinglePost(item._id)}>
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
      </Pressable>
    );
  };

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
      {isLoading ? (
        <ActivityIndicator color={colors.Primary} size={'large'} />
      ) : (
        <FlatList
          data={posts || []}
          keyExtractor={(item, index) => `${item._id}-${index}`}
          renderItem={renderPost}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
        />
      )}
    </View>
  );
};

export default Explore;
