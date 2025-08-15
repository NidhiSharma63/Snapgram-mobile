import AuthComponent from 'common/AuthComponent/Auth';
import React from 'react';

const SignUpScreen = (setIsLoggedIn: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return <AuthComponent loginScreen={false} setIsLoggedIn={setIsLoggedIn} />;
};

export default SignUpScreen;
