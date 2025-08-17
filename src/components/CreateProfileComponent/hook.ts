import useAuth from 'hooks/useAuth';
import getUserDetails from 'lib/getUserDetails';
import validateField from 'lib/ValidatePostField';
import {useCallback, useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';
import {AppConstants} from 'constant/keys';
import getStoragePathFromUrl from 'lib/getStoragePathFromUrl';
import {Platform} from 'react-native';

const useCreateProfileComponent = () => {
  const [userValues, setUserValues] = useState({
    username: '',
    bio: '',
    avatar: null,
  });
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);
  const [userDetails, setUserDetails] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const {useUpdateUser} = useAuth();
  const {mutateAsync: updateUser} = useUpdateUser();
  const navigation = useNavigation();

  useEffect(() => {
    async function getDetails() {
      const data = await getUserDetails();
      setUserDetails(data);
    }
    getDetails();
  }, []);

  /**
   * update user value
   */
  useEffect(() => {
    if (userDetails) {
      setUserValues({
        username: userDetails.username,
        bio: userDetails.bio,
        avatar: userDetails.avatar,
      });
    }
  }, [userDetails]);

  const handleChange = useCallback((name: string, value: string) => {
    setUserValues(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  // image picker
  const handleImagePick = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response?.assets?.[0].uri;
          setImageUri(uri);
        }
      },
    );
  }, []);

  /**
   * define submit
   */
  const handleSubmit = useCallback(async () => {
    if (!imageUri) {
      Toast.show({
        type: 'error',
        text1: 'Please select an image first',
      });
      return;
    }
    if (!validateField('Caption', userValues?.bio)) {
      return;
    }
    try {
      setIsUploading(true);
      // get file name using timestamp
      const timestamp = Date.now();
      const fileName = `images/post_${timestamp}.jpg`;

      // local path handle
      const uploadTask = storage()
        .ref(fileName)
        .putFile(
          Platform.OS === 'ios' ? imageUri.replace('file://', '') : imageUri,
        );

      await uploadTask;

      // uploaded file ka url
      const url = await storage().ref(fileName).getDownloadURL();

      const updatedPayload = {...userValues, file: url};
      const data = await updateUser(updatedPayload);

      // also delete old image
      if (userDetails?.avatar) {
        const storagePath = getStoragePathFromUrl(userDetails?.avatar);
        if (storagePath) {
          await storage().ref(storagePath).delete();
        }
      }
      navigation.navigate('Tabs', {screen: 'Home'});
      // update user details
      await AsyncStorage.setItem(
        AppConstants.USER_DETAILS,
        JSON.stringify(data),
      );
    } catch (error) {}
    setIsUploading(false);
  }, [imageUri, userValues, navigation, updateUser, userDetails]);

  const handleCancel = useCallback(() => {
    navigation.navigate('Tabs', {screen: 'Home'});
    setImageUri(undefined);
  }, [navigation]);
  return {
    userValues,
    handleChange,
    handleImagePick,
    imageUri,
    handleSubmit,
    isUploading,
    handleCancel,
  };
};

export default useCreateProfileComponent;
