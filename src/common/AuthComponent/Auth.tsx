import useAuthComponent from 'common/AuthComponent/hook';
import style from 'common/AuthComponent/style';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import Logo from '../../assets/images/logo.svg';

const AuthComponent = ({
  loginScreen,
  setIsLoggedIn,
}: {
  loginScreen?: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    handleNavigateToSignUp,
    handleNavigateToSignIn,
    userCreds,
    handleGetCreds,
    handleLogin,
    isLoading,
    handleSignUp,
    handleUpdateField,
  } = useAuthComponent(setIsLoggedIn);

  return (
    <View style={style.container}>
      <Logo />
      <Text style={style.title}>
        {loginScreen ? 'Login to your Account' : 'Create New Account'}
      </Text>
      <Text style={style.subtitle}>Please enter your account details</Text>
      {/* User name */}
      {!loginScreen && (
        <View style={style.inputContainer}>
          <Text style={style.label}>User Name</Text>
          <TextInput
            value={userCreds.username}
            style={style.input}
            placeholder="User Name"
            onChangeText={text => handleUpdateField('username', text)}
          />
        </View>
      )}
      {/* bio */}
      {!loginScreen && (
        <View style={style.inputContainer}>
          <Text style={style.label}>Bio</Text>
          <TextInput
            value={userCreds.bio}
            style={style.input}
            placeholder="Bio"
            onChangeText={text => handleUpdateField('bio', text)}
          />
        </View>
      )}

      {/* Email */}
      <View style={style.inputContainer}>
        <Text style={style.label}>Email</Text>
        <TextInput
          value={userCreds.email}
          style={style.input}
          placeholder="Email"
          onChangeText={text => handleUpdateField('email', text)}
        />
      </View>
      {/* Password */}
      <View style={style.inputContainer}>
        <Text style={style.label}>Password</Text>
        <TextInput
          value={userCreds.password}
          style={style.input}
          placeholder="password"
          onChangeText={text => handleUpdateField('password', text)}
        />
      </View>
      <View style={style.buttonContainer}>
        {loginScreen ? (
          <Pressable style={style.button} onPress={handleLogin}>
            {isLoading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <Text style={style.buttonText}>Submit</Text>
            )}
          </Pressable>
        ) : (
          <Pressable style={style.button} onPress={handleSignUp}>
            {
              // Activity indicator
              isLoading ? (
                <ActivityIndicator color={'#fff'} />
              ) : (
                <Text style={style.buttonText}>Submit</Text>
              )
            }
          </Pressable>
        )}

        {loginScreen && !isLoading && (
          <Pressable style={style.button} onPress={handleGetCreds}>
            <Text style={style.buttonText}>Get Creds</Text>
          </Pressable>
        )}
      </View>
      {loginScreen ? (
        <View style={style.signupContainer}>
          <Text>Don't have an account?</Text>
          <Pressable onPress={handleNavigateToSignUp}>
            <Text style={style.signupText}>Sign Up</Text>
          </Pressable>
        </View>
      ) : (
        <View style={style.signupContainer}>
          <Text>Already have an account?</Text>
          <Pressable onPress={handleNavigateToSignIn}>
            <Text style={style.signupText}>Sign In</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default AuthComponent;
