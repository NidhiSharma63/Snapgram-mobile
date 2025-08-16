import {useNavigation} from '@react-navigation/native';
import useAuth from 'hooks/useAuth';
import usePost from 'hooks/usePost';

const useExplore = () => {
  const {useGetAllPostStatic} = usePost();
  const {useGetAllUser} = useAuth();
  const {data: usersData} = useGetAllUser();
  const {data, isPending} = useGetAllPostStatic();
  const isLoading = isPending || usersData?.length === 0;
  const navigation = useNavigation();

  const handleNavigateToSinglePost = (id: string) => {
    navigation.navigate('SinglePost', {id});
  };
  return {data, isLoading, usersData, handleNavigateToSinglePost};
};

export default useExplore;
