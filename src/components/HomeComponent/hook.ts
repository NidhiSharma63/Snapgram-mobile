import usePost from 'hooks/usePost';

const useHomeComponent = () => {
  const {useGetAllPost} = usePost();
  const {
    data,
    isPending: isPostLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAllPost();

  console.log(data, isPostLoading, isFetchingNextPage);
  return {
    data,
    isPostLoading,
    isFetchingNextPage,
  };
};

export default useHomeComponent;
