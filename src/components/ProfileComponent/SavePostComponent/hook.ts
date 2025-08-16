import {useNavigation} from '@react-navigation/native';
import useAuth from 'hooks/useAuth';
import usePost from 'hooks/usePost';
import useSavePost from 'hooks/useSavePost';

const useSavePostComponent = () => {
  const {useGetAllSavePost} = useSavePost();
  const {data: savePosts, isPending: userSavedPostLoading} =
    useGetAllSavePost();
  const {useGetPostByIds} = usePost();
  const {data: posts, isLoading: isPostLoading} = useGetPostByIds(
    savePosts?.[0]?.postId,
  );
  const {useGetAllUser} = useAuth();
  const {data: usersData, isFetching: isLoadinUser} = useGetAllUser();
  const isLoading = userSavedPostLoading || isLoadinUser || isPostLoading;
  const navigation = useNavigation();

  const handleNavigateToSinglePost = (id: string) => {
    navigation.navigate('SinglePost', {id});
  };

  return {
    usersData,
    posts,
    isLoading,
    handleNavigateToSinglePost,
  };
};

export default useSavePostComponent;
