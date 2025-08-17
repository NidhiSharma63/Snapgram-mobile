import style from 'components/CreatePostComponent/style';
import useCreateProfileComponent from 'components/CreateProfileComponent/hook';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const CreateProfileComponent = () => {
  const {
    handleChange,
    userValues,
    handleImagePick,
    imageUri,
    handleSubmit,
    isUploading,
    handleCancel,
  } = useCreateProfileComponent();
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Text style={style.label}>Username</Text>
        <TextInput
          placeholder="username"
          style={style.input}
          value={userValues.username}
          editable={false}
          onChangeText={text => handleChange('username', text)}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.label}>Bio</Text>
        <TextInput
          placeholder="bio"
          style={style.input}
          value={userValues.bio}
          onChangeText={text => handleChange('bio', text)}
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
      {/* save profile */}
      <View style={style.buttonContainer}>
        {!isUploading && (
          <Pressable style={style.button} onPress={handleCancel}>
            {<Text style={style.buttonText}>Cancel </Text>}
          </Pressable>
        )}
        <Pressable style={style.button} onPress={handleSubmit}>
          {isUploading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={style.buttonText}>Save Profile</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default CreateProfileComponent;
