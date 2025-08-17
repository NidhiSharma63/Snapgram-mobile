import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';
import usePost from 'hooks/usePost';
import getUserDetails from 'lib/getUserDetails';
import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

const useCreatePostComponent = () => {
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);
  const [isPostUploading, setIsPostUploading] = useState(false);
  const navigation = useNavigation();
  const {useCreatePost} = usePost();
  const {mutateAsync: createPost} = useCreatePost();
  const [userDetails, setUserDetails] = useState(null);
  const [values, setValues] = useState({
    caption: '',
    location: '',
    tags: '',
    userId: '',
    userAvatar: '',
    createdAt: new Date(),
  });

  // set user details
  useEffect(() => {
    async function getDetails() {
      const data = await getUserDetails();
      setUserDetails(data);

      setValues(prev => {
        return {
          ...prev,
          userId: data._id,
          userAvatar: data.avatar,
        };
      });
    }

    getDetails();
  }, []);

  // handle change
  const handleChange = (name: string, value: string) => {
    setValues({...values, [name]: value});
  };

  // image picker
  const handleImagePick = () => {
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
  };

  // create post handler
  async function handleCreatePost(values: any) {
    if (!imageUri) {
      Toast.show({
        type: 'error',
        text1: 'Please select an image first',
      });
      return;
    }

    try {
      setIsPostUploading(true);

      // yaha filename ke liye simple timestamp use kiya
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

      const updatedPayload = {...values, file: url};
      await createPost(updatedPayload);

      navigation.navigate('Home');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Please try again',
      });
      console.log('Upload Error:', error);
    } finally {
      setIsPostUploading(false);
    }
  }

  return {
    imageUri,
    isPostUploading,
    handleImagePick,
    handleCreatePost,
    handleChange,
  };
};

export default useCreatePostComponent;
