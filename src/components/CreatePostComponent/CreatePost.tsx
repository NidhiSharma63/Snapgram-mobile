import useCreatePostComponent from 'components/CreatePostComponent/hook';
import style from 'components/CreatePostComponent/style';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const CreatePost = () => {
  const {
    imageUri,
    handleImagePick,
    handleChange,
    handleCreatePost,
    handleCancel,
    isPostUploading,
  } = useCreatePostComponent();
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Text style={style.label}>Caption</Text>
        <TextInput
          placeholder="Name"
          style={style.input}
          onChangeText={text => handleChange('caption', text)}
        />
      </View>
      <TouchableOpacity
        style={[style.button, {width: '100%'}]}
        onPress={handleImagePick}>
        <Text style={style.buttonText}>Upload Image</Text>
      </TouchableOpacity>
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={{width: 200, height: 200, marginTop: 10, alignSelf: 'center'}}
        />
      )}
      <View style={style.inputContainer}>
        <Text style={style.label}>Add Location</Text>
        <TextInput
          placeholder="UK"
          style={style.input}
          onChangeText={text => handleChange('location', text)}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.label}>Add Tags (separated by comma " , ")</Text>
        <TextInput
          placeholder="Art, Music"
          style={style.input}
          onChangeText={text => handleChange('tags', text)}
        />
      </View>
      <View style={style.buttonContainer}>
        {!isPostUploading && (
          <TouchableOpacity style={style.button} onPress={handleCancel}>
            <Text style={style.buttonText}>Cancel</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={style.button} onPress={handleCreatePost}>
          {isPostUploading ? (
            <ActivityIndicator size="small" color={'#fff'} />
          ) : (
            <Text style={style.buttonText}>Upload </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePost;
