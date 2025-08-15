import useHomeComponent from 'components/HomeComponent/hook';
import {formatDateTime} from 'lib/FormateDate';
import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Like from '../../assets/images/like.svg';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
import Save from '../../assets/images/save.svg';
import style from './style';

const Home = () => {
  const {data, isPostLoading, isFetchingNextPage, fetchNextPage, hasNextPage} =
    useHomeComponent();

  // Flatten paginated data into a single array
  const posts = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.pages.flatMap(page => page.data || []);
  }, [data]);

  const renderPostCard = ({item}: {item: any}) => (
    <View style={style.postCard}>
      {/* post card header */}
      <View style={style.postCardHeader}>
        {
          // If there's a profile picture, show it
          item.userAvatar ? (
            <Image
              style={style.userAvatar}
              source={{
                uri: item.userAvatar,
              }}
            />
          ) : (
            <ProfilePlaceholder width={32} height={32} />
          )
        }

        <View style={style.headerMetadata}>
          <Text style={style.TextPrimary}>{item.author || 'Unknown'}</Text>
          <Text style={style.TextSecondary}>
            {formatDateTime(item.createdAt) || 'Unknown date'} -{' '}
            {item.location?.join(', ') || 'Unknown location'}
          </Text>
        </View>
      </View>

      {/* Title */}
      {/* <Text style={style.TextPrimary}>{item.title}</Text>
      {/* caption */}
      <Text style={style.TextSecondary}>{item.caption}</Text>

      {/* image */}
      <Image
        style={style.postImg}
        source={{
          uri: item.file,
        }}
      />
      {/* actions */}
      <View style={style.actions}>
        <Like />
        <Save />
      </View>
    </View>
  );

  if (isPostLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderPostCard}
        contentContainerStyle={style.container}
        ListHeaderComponent={<Text style={{marginTop: 10}}>Home Feed</Text>}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator style={{marginVertical: 10}} />
          ) : null
        }
      />
    </ScrollView>
  );
};

export default Home;
