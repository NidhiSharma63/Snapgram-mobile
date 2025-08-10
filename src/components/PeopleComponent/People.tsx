import style from 'components/PeopleComponent/style';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';

const People = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={style.container}>
        <View style={style.pplCard}>
          <ProfilePlaceholder />
          <Text style={style.textPrimary}>Nidhi</Text>
          <Text style={style.textSecondary}>nidhisharma639593@gmail.com</Text>
          {/* Button */}
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default People;
