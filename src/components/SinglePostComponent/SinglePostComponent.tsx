import useSinglePostComponent from 'components/SinglePostComponent/hook';
import style from 'components/SinglePostComponent/style';
import {formatDateTime} from 'lib/FormateDate';
import React from 'react';
import {Image, Text, View} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
// import Liked from '../../assets/images/Liked.svg';
// import Saved from '../../assets/images/Saved.svg';
// import Save from '../../assets/images/Save.svg';
// import Like from '../../assets/images/Like.svg';

const SinglePostComponent = ({id}: {id: string}) => {
  const {data, isPostPending, usersData, findCurrentUser} =
    useSinglePostComponent(id);
  console.log({findCurrentUser, data});
  return (
    <View style={style.container}>
      {/* {
        // loading component
        isPostPending ? (
          <Text>Loading...</Text>
        ) : (
          <View style={style.mainImage}>
            <Image source={{uri: data?.file}} style={style.image} />
            <View>
              <View>
                {findCurrentUser?.avatar ? (
                  <Image
                    source={{uri: findCurrentUser?.avatar}}
                    style={{width: 24, height: 24, borderRadius: 12}}
                  />
                ) : (
                  <ProfilePlacholder width={24} height={24} />
                )}
                <View>
                  <Text>{findCurrentUser?.username || 'Unknown'}</Text>
                  <Text>{formatDateTime(data?.createdAt) || 'Unknown'}</Text>
                  <Text>{data?.location?.join(', ') || 'Unknown'}</Text>
                </View>
              </View>
            </View>
          </View>
        )
      } */}
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
        {/* <View style={style.actions}>
        {likeData?.[0]?.postId.includes(data._id) ? (
          <Pressable onPress={() => handleRemoveLike(data._id)}>
            <Liked />
          </Pressable>
        ) : (
          <Pressable onPress={() => handleAddLike(data._id)}>
            <Like />
          </Pressable>
        )}
        {saveData?.[0]?.postId.includes(data._id) ? (
          <Pressable onPress={() => handleRemoveSave(data._id)}>
            <Saved />
          </Pressable>
        ) : (
          <Pressable onPress={() => handleAddSave(data._id)}>
            <Save />
          </Pressable>
        )}
      </View> */}
      </View>
    </View>
  );
};

export default SinglePostComponent;
