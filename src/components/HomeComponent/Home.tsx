import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Like from '../../assets/images/like.svg';
import ProfilePlaceholder from '../../assets/images/profile-placeholder.svg';
import Save from '../../assets/images/save.svg';
import style from './style';

const Home = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={style.container}>
        <Text style={{marginTop: 10}}>Home Feed</Text>

        {/* Repeatable post card */}
        {[1, 2, 3, 4, 5].map((_, index) => (
          <View key={index} style={style.postCard}>
            {/* post card header */}
            <View style={style.postCardHeader}>
              <ProfilePlaceholder width={32} height={32} />
              <View style={style.headerMetadata}>
                <Text style={style.TextPrimary}>Nidhi</Text>
                <Text style={style.TextSecondary}>
                  Jun 15, 2025 at 3:39 PM - Modinagar
                </Text>
              </View>
            </View>

            {/* Title */}
            <Text style={style.TextPrimary}>Title</Text>
            {/* caption */}
            <Text style={style.TextSecondary}>Caption</Text>
            {/* image */}
            <View style={style.postImg} />
            {/* actions */}
            <View style={style.actions}>
              <Like />
              <Save />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
