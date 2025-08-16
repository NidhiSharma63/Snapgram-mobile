import {useNavigation} from '@react-navigation/native';
import useAuth from 'hooks/useAuth';
import useLikePost from 'hooks/useLikePost';
import usePost from 'hooks/usePost';
import useSavePost from 'hooks/useSavePost';
import {useCallback} from 'react';

const useSinglePostComponent = (id: string) => {
  const {useGetPostById, useGetAllPostStatic} = usePost();
  const {data, isPending: isPostPending} = useGetPostById(id);
  const {data: staticPost} = useGetAllPostStatic();
  const {useGetAllUser} = useAuth();
  const {data: usersData} = useGetAllUser();
  const findCurrentUser = usersData?.find(user => user?._id === data?.userId);

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

  const navigation = useNavigation();

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

  const handleNavigateToSinglePost = (id: string) => {
    navigation.navigate('SinglePost', {id});
  };
  return {
    data,
    isPostPending,
    usersData,
    findCurrentUser,
    saveData,
    likeData,
    handleAddLike,
    handleAddSave,
    handleRemoveLike,
    handleRemoveSave,
    handleNavigateToSinglePost,
    staticPost,
  };
};

export default useSinglePostComponent;
