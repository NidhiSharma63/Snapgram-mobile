import LikePostComponent from 'components/ProfileComponent/LikePostComponent/LikePostComponent';
import SavePostComponent from 'components/ProfileComponent/SavePostComponent/SavePostComponent';
import React from 'react';
import {useWindowDimensions} from 'react-native';

import {SceneMap, TabView} from 'react-native-tab-view';

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
      style={{flex: 1}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
