import useSinglePostComponent from 'components/SinglePostComponent/hook';
import style from 'components/SinglePostComponent/style';
import {formatDateTime} from 'lib/FormateDate';
import React from 'react';
import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import Like from '../../assets/images/like.svg';
import Liked from '../../assets/images/liked.svg';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
import Save from '../../assets/images/save.svg';
import Saved from '../../assets/images/saved.svg';


const SinglePostComponent = ({id}: {id: string}) => {
  const {
    data,
    isPostPending,
    usersData,
    findCurrentUser,
    saveData,
    likeData,
    handleAddLike,
    handleAddSave,
    handleRemoveLike,
    handleRemoveSave,
    handleNavigateToSinglePost,
    staticPost,
  } = useSinglePostComponent(id);

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
      {isPostPending && <Text>Loading...</Text>}
      <ScrollView>
        <View style={style.postCard}>
          {/* post card header */}
          <View style={style.postCardHeader}>
            {
              // If there's a profile picture, show it
              findCurrentUser?.avatar ? (
                <Image
                  style={style.userAvatar}
                  source={{
                    uri: findCurrentUser.avatar,
                  }}
                />
              ) : (
                <ProfilePlaceholder width={32} height={32} />
              )
            }

            <View style={style.headerMetadata}>
              <Text style={style.TextPrimary}>
                {findCurrentUser?.username || 'Unknown'}
              </Text>
              <Text style={style.TextSecondary}>
                {formatDateTime(data?.createdAt) || 'Unknown date'} -{' '}
                {data?.location?.join(', ') || 'Unknown location'}
              </Text>
            </View>
          </View>

          {/* Title */}
          {/* <Text style={style.TextPrimary}>{data.title}</Text>
      {/* caption */}
          <Text style={style.TextSecondary}>{data?.caption}</Text>

          {/* image */}
          <Image
            style={style.postImg}
            source={{
              uri: data?.file,
            }}
          />
          {/* actions */}
          <View style={style.actions}>
            {likeData?.[0]?.postId.includes(data?._id) ? (
              <Pressable onPress={() => handleRemoveLike(data?._id)}>
                <Liked />
              </Pressable>
            ) : (
              <Pressable onPress={() => handleAddLike(data?._id)}>
                <Like />
              </Pressable>
            )}
            {saveData?.[0]?.postId.includes(data?._id) ? (
              <Pressable onPress={() => handleRemoveSave(data?._id)}>
                <Saved />
              </Pressable>
            ) : (
              <Pressable onPress={() => handleAddSave(data?._id)}>
                <Save />
              </Pressable>
            )}
          </View>
        </View>
      </ScrollView>
      {/* grid */}

      <FlatList
        data={staticPost || []}
        keyExtractor={(item, index) => `${item._id}-${index}`}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default SinglePostComponent;
