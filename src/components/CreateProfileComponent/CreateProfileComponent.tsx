import style from 'components/CreatePostComponent/style';
import useCreateProfileComponent from 'components/CreateProfileComponent/hook';
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
const CreateProfileComponent = () => {
  const {handleChange, handleImagePick, imageUri} = useCreateProfileComponent();
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
    </View>
  );
};

export default CreateProfileComponent;
