import useSinglePostComponent from 'components/SinglePostComponent/hook';
import style from 'components/SinglePostComponent/style';
import {formatDateTime} from 'lib/FormateDate';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
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
  } = useSinglePostComponent(id);
  return (
    <View style={style.container}>
      {isPostPending && <Text>Loading...</Text>}
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
    </View>
  );
};

export default SinglePostComponent;
