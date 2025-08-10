import style from 'components/ExploreComponent/style';
import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
import Search from '../../assets/images/search.svg';

const Explore = () => {
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
      <ScrollView style={{width: '100%'}}>
        <View style={style.explorePost}>
          {/* Image */}
          <View style={style.postImage} />
          {/* user data */}
          <View style={style.userData}>
            <ProfilePlaceholder width={24} height={24} />
            <Text style={style.textPrimary}>Nidhi</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore;
