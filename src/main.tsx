import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CreatePost from 'pages/CreatePost';
import Explore from 'pages/Explore';
import HomeScreen from 'pages/HomeScreen';
import InboxScreen from 'pages/InboxScreen';
import PeopleScreen from 'pages/PeopleScreen';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen name="InboxPost" component={InboxScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Create Post" component={CreatePost} />
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
const main = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: 'Transparent'}}>
        <BottomTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default main;
