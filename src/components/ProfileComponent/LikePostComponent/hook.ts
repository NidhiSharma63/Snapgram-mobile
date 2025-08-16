import {useNavigation} from '@react-navigation/native';
import useAuth from 'hooks/useAuth';
import useLikePost from 'hooks/useLikePost';
import usePost from 'hooks/usePost';

const useLikePostComponent = () => {
  const {useGetAllLike} = useLikePost();
  const {data: likePost, isPending: userLikePostPending} = useGetAllLike();
  const {useGetPostByIds} = usePost();
  const {data: posts, isLoading: isPostLoading} = useGetPostByIds(
    likePost?.[0]?.postId,
  );
  const {useGetAllUser} = useAuth();
  const {data: usersData, isFetching: isLoadinUser} = useGetAllUser();
  const isLoading = userLikePostPending || isLoadinUser || isPostLoading;
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

export default useLikePostComponent;
