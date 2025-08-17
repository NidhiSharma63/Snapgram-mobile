import {getApp} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

import useAuth from 'hooks/useAuth';
import useLikePost from 'hooks/useLikePost';
import usePost from 'hooks/usePost';
import useSavePost from 'hooks/useSavePost';
import getStoragePathFromUrl from 'lib/getStoragePathFromUrl';
import getUserDetails from 'lib/getUserDetails';
import {useCallback, useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';

const useHomeComponent = () => {
  const {useGetAllPost, useDeletePost} = usePost();

  const app = getApp(); // default app instance
  const {
    data,
    isPending: isPostLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetAllPost();

  const {useGetAllUser} = useAuth();
  const {data: usersData} = useGetAllUser();
  const {mutateAsync: deletePost} = useDeletePost();

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const data = await getUserDetails();
      setUserDetails(data);
    }
    getDetails();
  }, []);

  const {useAddSave, useGetAllSavePost, useRemoveSave} = useSavePost();
  const {useAddLike, useGetAllLike, useRemoveLike} = useLikePost();
  const {data: saveData} = useGetAllSavePost();
  const {data: likeData} = useGetAllLike();

  const {mutateAsync: addLike} = useAddLike();
  const {mutateAsync: addSave} = useAddSave();
  const {mutateAsync: removeLike} = useRemoveLike();
  const {mutateAsync: removeSave} = useRemoveSave();

  const handleAddLike = useCallback(
    (postId: string) => addLike({postId}),
    [addLike],
  );
  const handleAddSave = useCallback(
    (postId: string) => addSave({postId}),
    [addSave],
  );
  const handleRemoveLike = useCallback(
    (postId: string) => removeLike({postId}),
    [removeLike],
  );
  const handleRemoveSave = useCallback(
    (postId: string) => removeSave({postId}),
    [removeSave],
  );

  const handleDeletePost = useCallback(
    async (postId: string, filePath: string) => {
      try {
        const storagePath = getStoragePathFromUrl(filePath);
        if (storagePath) {
          await storage().ref(storagePath).delete();
        }
        // remove from save/like if present
        if (saveData?.[0]?.postId.includes(postId)) {
          removeSave({postId});
        }
        if (likeData?.[0]?.postId.includes(postId)) {
          removeLike({postId});
        }

        // delete from DB
        await deletePost({_id: postId});
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error deleting post',
        });
        console.log('Delete error:', error);
      }
    },
    [removeLike, removeSave, deletePost, saveData, likeData],
  );

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
    fetchNextPage,
    hasNextPage,
    userDetails,
    handleDeletePost,
  };
};

export default useHomeComponent;
