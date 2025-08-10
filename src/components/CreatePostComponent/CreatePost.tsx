import style from 'components/CreatePostComponent/style';
import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const CreatePost = () => {
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

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
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Text style={style.label}>Caption</Text>
        <TextInput placeholder="Name" style={style.input} />
      </View>
      <TouchableOpacity
        style={[style.button, {width: '100%'}]}
        onPress={handleImagePick}>
        <Text style={style.buttonText}>Upload Image</Text>
      </TouchableOpacity>
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={{width: 200, height: 200, marginTop: 10}}
        />
      )}
      <View style={style.inputContainer}>
        <Text style={style.label}>Add Location</Text>
        <TextInput placeholder="UK" style={style.input} />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.label}>Add Tags (separated by comma " , ")</Text>
        <TextInput placeholder="Art, Music" style={style.input} />
      </View>
      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.button} onPress={handleImagePick}>
          <Text style={style.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={handleImagePick}>
          <Text style={style.buttonText}>Upload </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePost;
