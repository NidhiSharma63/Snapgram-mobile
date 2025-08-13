import LikePostComponent from 'components/ProfileComponent/LikePostComponent/LikePostComponent';
import SavePostComponent from 'components/ProfileComponent/SavePostComponent/SavePostComponent';
import colors from 'constant/color';
import React from 'react';
import {useWindowDimensions} from 'react-native';

import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

const renderScene = SceneMap({
  likePost: LikePostComponent,
  savePost: SavePostComponent,
});

const routes = [
  {key: 'likePost', title: 'LikePost'},
  {key: 'savePost', title: 'SavePost'},
];

export default function ProfileTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      style={{flex: 1, boxShadow: 'none'}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: '#FAF8F8',
            elevation: 0, // Android
            shadowColor: 'transparent', // iOS
          }}
          style={{
            backgroundColor: '#FAF8F8',
            elevation: 0, // Android
            shadowColor: 'transparent', // iOS
          }}
          activeColor={colors.TextPrimary}
          inactiveColor="gray"
        />
      )}
    />
  );
}
