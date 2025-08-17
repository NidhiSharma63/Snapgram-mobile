import style from 'components/PeopleComponent/style';
import colors from 'constant/color';
import useAuth from 'hooks/useAuth';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';

const People = () => {
  const {useGetAllUser} = useAuth();
  const {data: usersData, isLoading} = useGetAllUser();

  const renderUser = ({item}: {item: any}) => (
    <View style={style.pplCard}>
      {item.avatar ? (
        <Image
          source={{uri: item.avatar}}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
      ) : (
        <ProfilePlaceholder width={50} height={50} />
      )}

      <Text style={style.textPrimary}>{item.username || 'Unknown'}</Text>
      <Text style={style.textSecondary}>{item.email || 'No email'}</Text>

      {/* Button */}
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  if (isLoading) {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color={colors.Primary} />
      </View>
    );
  }

  return (
    <FlatList
      data={usersData || []}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={renderUser}
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default People;
