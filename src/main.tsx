import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from 'constant/color';
import CreatePost from 'pages/CreatePostScreen';
import Explore from 'pages/Explore';
import HomeScreen from 'pages/HomeScreen';
import PeopleScreen from 'pages/PeopleScreen';
import ProfileScreen from 'pages/ProfileScreen'; // ✅ New screen
import React from 'react';
import {SafeAreaView} from 'react-native';
import GalleryAdd from '../src/assets/images/gallery-add.svg';
import HomeIcon from '../src/assets/images/home.svg';
import PeopleIcon from '../src/assets/images/people.svg';
import Wallpaper from '../src/assets/images/wallpaper.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

const Main = () => {
  return (
    // <NavigationContainer>
    <SafeAreaView style={{flex: 1, paddingTop: 20, backgroundColor: 'black'}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Bottom Tabs as main */}
        {/* <Stack.Screen name="ProfileTab" component={ProfileTabs} /> */}
        <Stack.Screen name="Tabs" component={BottomTabs} />
        {/* Profile screen separate */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </SafeAreaView>
    // </NavigationContainer>
  );
};

export default Main;
