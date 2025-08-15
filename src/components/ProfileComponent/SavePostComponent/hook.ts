import useAuth from 'hooks/useAuth';
import usePost from 'hooks/usePost';
import useSavePost from 'hooks/useSavePost';

const useSavePostComponent = () => {
  const {useGetAllSavePost} = useSavePost();
  const {data: savePosts, isPending: userSavedPostLoading} =
    useGetAllSavePost();
  const {useGetPostByIds} = usePost();
  const {
    data: posts,
    isFetching,
    isLoading,
  } = useGetPostByIds(savePosts?.[0]?.postId);
  const {useGetAllUser} = useAuth();
  const {data: usersData, isFetching: isLoadinUser} = useGetAllUser();

  console.log(posts, 'posts', usersData, 'usersData');
  return {
    usersData,
    posts,
    isLoading,
  };
};

export default useSavePostComponent;
