import AuthComponent from 'common/AuthComponent/Auth';
import React from 'react';

const SignInScreen = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return <AuthComponent loginScreen={true} setIsLoggedIn={setIsLoggedIn} />;
};

export default SignInScreen;
