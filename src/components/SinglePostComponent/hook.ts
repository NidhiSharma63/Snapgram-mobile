import {useNavigation} from '@react-navigation/native';
import useAuth from 'hooks/useAuth';
import useLikePost from 'hooks/useLikePost';
import usePost from 'hooks/usePost';
import useSavePost from 'hooks/useSavePost';
import {useCallback, useMemo} from 'react';

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
  /**
   * filter static post from post means i don't want to include that post which is already present in
   * get post by id
   */

  const filteredStaticPost = useMemo(() => {
    if (staticPost) {
      return staticPost?.filter(post => post?._id !== data?._id);
    }
    return [];
  }, [staticPost, data]);

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
    staticPost: filteredStaticPost,
  };
};

export default useSinglePostComponent;
