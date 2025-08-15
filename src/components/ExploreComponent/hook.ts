import useAuth from 'hooks/useAuth';
import usePost from 'hooks/usePost';

const useExplore = () => {
  const {useGetAllPostStatic} = usePost();
  const {useGetAllUser} = useAuth();
  const {data: usersData} = useGetAllUser();
  const {data, isPending} = useGetAllPostStatic();
  const isLoading = isPending || usersData?.length === 0;
  console.log(data, 'data');
  return {data, isLoading, usersData};
};

export default useExplore;
