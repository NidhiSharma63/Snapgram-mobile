import useAuth from 'hooks/useAuth';
import usePost from 'hooks/usePost';

const useSinglePostComponent = (id: string) => {
  const {useGetPostById} = usePost();
  const {data, isPending: isPostPending} = useGetPostById(id);
  const {useGetAllUser} = useAuth();
  const {data: usersData} = useGetAllUser();
  const findCurrentUser = usersData?.find(user => user?._id === data?.userId);

  return {
    data,
    isPostPending,
    usersData,
    findCurrentUser,
  };
};

export default useSinglePostComponent;
