import {useMutation, useQuery} from '@tanstack/react-query';
import type {AxiosError} from 'axios';
import {customAxiosRequestForGet, customAxiosRequestForPost} from 'axios/axios';
import {ErrorResponse} from 'constant/interfaces';
import {QueryKeys} from 'constant/keys';
import Toast from 'react-native-toast-message';
import {queryClient} from '../../App';

function useAuth() {
  // sign up
  // const navigation = useNavigation();

  function useSignUp() {
    return useMutation({
      mutationFn: (payload: {
        username: string;
        bio: string;
        email: string;
        password: string;
        avatar: string | null;
      }) => customAxiosRequestForPost('/register', 'post', payload),

      onError: (error: AxiosError<ErrorResponse>) => {
        console.log(error);

        if (error?.response?.data.status === 400) {
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
      // onSuccess() {
      //   navigation.navigate('Main', {screen: 'Home'});
      // },
    });
  }

  /**
   * use sign in (login)
   */
  function useSignIn() {
    return useMutation({
      mutationFn: (payload: {email: string; password: string}) =>
        customAxiosRequestForPost('/login', 'post', payload),

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
      // onSuccess() {
      //   navigation.navigate('Main', {screen: 'Home'});
      // },
    });
  }

  /**
   * use logout
   */

  function useLogout() {
    return useMutation({
      mutationFn: (payload: {userId: string; token: string}) =>
        customAxiosRequestForPost('/logout', 'post', payload),
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
    });
  }

  /**
   * use get user by id
   */

  function useGetUserById(id: string) {
    return useQuery({
      enabled: !!id,
      queryKey: [QueryKeys.USER_BY_ID, id],
      queryFn: () => customAxiosRequestForGet('/user', {id}),
    });
  }

  /**
   * use get all user
   */

  function useGetAllUser() {
    return useQuery({
      queryKey: [QueryKeys.USERS],
      queryFn: () => customAxiosRequestForGet('/users', {}),
    });
  }

  /**
   * update user
   */

  function useUpdateUser() {
    return useMutation({
      mutationFn: (payload: {bio: string; file: string}) =>
        customAxiosRequestForPost('/user', 'put', payload),
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
        queryClient.invalidateQueries({queryKey: [QueryKeys.USER_BY_ID]});
      },
    });
  }
  return {
    useSignUp,
    useSignIn,
    useLogout,
    useGetUserById,
    useUpdateUser,
    useGetAllUser,
  };
}

export default useAuth;
