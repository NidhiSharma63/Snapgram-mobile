import {useMutation, useQuery} from '@tanstack/react-query';
import type {AxiosError} from 'axios';
import {customAxiosRequestForGet, customAxiosRequestForPost} from 'axios/axios';
import {ErrorResponse} from 'constant/interfaces';
import {QueryKeys} from 'constant/keys';
import Toast from 'react-native-toast-message';
import {queryClient} from '../../App';

export default function useSavePost() {
  // const {setSavePostId} = useUserPostIdForSaveAndLike();

  function useAddSave() {
    return useMutation({
      mutationFn: (payload: {userId: string; postId: string}) =>
        customAxiosRequestForPost('/save/add', 'put', payload),

      onError: (error: AxiosError<ErrorResponse>) => {
        console.log(error);

        if (error.response?.data.status === 400) {
          Toast.show({
            type: 'error',
            text1: error.response.data.error,
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
          });
        }
      },
      onSuccess: () => {
        // setSavePostId('');
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_USER_SAVE_POST],
        });
      },
    });
  }

  /**
   * use remove save
   */

  function useRemoveSave() {
    return useMutation({
      mutationFn: (payload: {userId: string; postId: string}) =>
        customAxiosRequestForPost('/save/remove', 'delete', payload),

      onError: (error: AxiosError<ErrorResponse>) => {
        console.log(error);

        if (error.response?.data.status === 400) {
          Toast.show({
            type: 'error',
            text1: error.response.data.error,
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
          });
        }
      },
      onSuccess: () => {
        // setSavePostId('');
        console.log('save post id removed');
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_USER_SAVE_POST],
        });
      },
    });
  }

  /**
   * use get all save
   */

  function useGetAllSavePost() {
    return useQuery({
      queryKey: [QueryKeys.GET_USER_SAVE_POST],
      queryFn: () => customAxiosRequestForGet('/saves', {}),
    });
  }
  return {
    useAddSave,
    useRemoveSave,
    useGetAllSavePost,
  };
}
