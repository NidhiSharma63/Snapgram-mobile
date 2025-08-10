import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import colors from 'constant/color';
import CreatePost from 'pages/CreatePostScreen';
import Explore from 'pages/Explore';
import HomeScreen from 'pages/HomeScreen';
import PeopleScreen from 'pages/PeopleScreen';
import React from 'react';
import {SafeAreaView} from 'react-native';
import GalleryAdd from '../src/assets/images/gallery-add.svg';
import HomeIcon from '../src/assets/images/home.svg';
import PeopleIcon from '../src/assets/images/people.svg';
import Wallpaper from '../src/assets/images/wallpaper.svg';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <HomeIcon width={24} height={24} />;
          }

          if (route.name === 'People') {
            return <PeopleIcon width={24} height={24} />;
          }
          if (route.name === 'Create Post') {
            return <GalleryAdd width={24} height={24} />;
          }
          if (route.name === 'Explore') {
            return <Wallpaper width={24} height={24} />;
          }
          return null;
        },
        tabBarActiveTintColor: colors.Primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Create Post" component={CreatePost} />
    </Tab.Navigator>
  );
}

const main = () => {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: 20,
          backgroundColor: 'black',
        }}>
        <BottomTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default main;
