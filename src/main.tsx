import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CreatePost from 'pages/CreatePost';
import Explore from 'pages/Explore';
import HomeScreen from 'pages/HomeScreen';
import InboxScreen from 'pages/InboxScreen';
import PeopleScreen from 'pages/PeopleScreen';
import React from 'react';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Snapgram" component={HomeScreen} />
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
      <BottomTabs />
    </NavigationContainer>
  );
};

export default main;
