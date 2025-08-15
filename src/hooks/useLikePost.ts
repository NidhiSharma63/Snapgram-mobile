import {useMutation, useQuery} from '@tanstack/react-query';
import type {AxiosError} from 'axios';
import {customAxiosRequestForGet, customAxiosRequestForPost} from 'axios/axios';
import {ErrorResponse} from 'constant/interfaces';
import {QueryKeys} from 'constant/keys';
import Toast from 'react-native-toast-message';
import {queryClient} from '../../App';

export default function useLikePost() {
  // const {toast} = useToast();
  // const {setLikePostId} = useUserPostIdForSaveAndLike();
  // const {id} = useParams();

  function useAddLike() {
    return useMutation({
      mutationFn: (payload: {userId: string; postId: string}) =>
        customAxiosRequestForPost('/like/add', 'put', payload),

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
      onSettled: () => {
        // setLikePostId('');
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_USER_Like_POST],
        });
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_USER_SAVE_POST],
        });
        queryClient.invalidateQueries({queryKey: [QueryKeys.GET_ALL_POSTS]});
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_POST_BY_ID],
        });
      },
    });
  }

  /**
   * use remove save
   */

  function useRemoveLike() {
    return useMutation({
      mutationFn: (payload: {userId: string; postId: string}) =>
        customAxiosRequestForPost('/like/remove', 'delete', payload),

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
      onSettled: () => {
        // setLikePostId('');
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_USER_Like_POST],
        });
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_USER_SAVE_POST],
        });
        queryClient.invalidateQueries({queryKey: [QueryKeys.GET_ALL_POSTS]});
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_POST_BY_ID],
        });
      },
    });
  }

  /**
   * use get all save
   */

  function useGetAllLike() {
    return useQuery({
      queryKey: [QueryKeys.GET_USER_Like_POST],
      queryFn: () => customAxiosRequestForGet('/likes', {}),
    });
  }
  return {
    useAddLike,
    useRemoveLike,
    useGetAllLike,
  };
}
