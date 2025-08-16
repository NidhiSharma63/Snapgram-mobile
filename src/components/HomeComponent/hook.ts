import useAuth from 'hooks/useAuth';
import useLikePost from 'hooks/useLikePost';
import usePost from 'hooks/usePost';
import useSavePost from 'hooks/useSavePost';
import {useCallback} from 'react';

const useHomeComponent = () => {
  const {useGetAllPost} = usePost();
  const {
    data,
    isPending: isPostLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAllPost();

  const {useGetAllUser} = useAuth();
  const {data: usersData} = useGetAllUser();

  const {useAddSave, useGetAllSavePost, useRemoveSave} = useSavePost();
  const {useAddLike, useGetAllLike, useRemoveLike} = useLikePost();
  const {data: saveData} = useGetAllSavePost();
  const {data: likeData} = useGetAllLike();

  // add like and save post
  const {mutateAsync: addLike} = useAddLike();
  const {mutateAsync: addSave} = useAddSave();
  // remove like and remove save post
  const {mutateAsync: removeLike} = useRemoveLike();
  const {mutateAsync: removeSave} = useRemoveSave();

  const handleAddLike = useCallback(
    (postId: string) => {
      addLike({postId: postId});
    },
    [addLike],
  );
  const handleAddSave = useCallback(
    (postId: string) => {
      addSave({postId: postId});
    },
    [addSave],
  );

  const handleRemoveLike = useCallback(
    (postId: string) => {
      removeLike({postId: postId});
    },
    [removeLike],
  );

  const handleRemoveSave = useCallback(
    (postId: string) => {
      removeSave({postId: postId});
    },
    [removeSave],
  );

  // console.log(data, isPostLoading, isFetchingNextPage);
  return {
    data,
    isPostLoading,
    isFetchingNextPage,
    saveData,
    likeData,
    usersData,
    handleAddLike,
    handleAddSave,
    handleRemoveLike,
    handleRemoveSave,
  };
};

export default useHomeComponent;
