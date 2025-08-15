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
  return {
    usersData,
    posts,
    isLoading,
  };
};

export default useLikePostComponent;
