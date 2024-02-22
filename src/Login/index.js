import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { provider, auth } from "../firebase";

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);

  const signWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setIsAuth(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuth) {
    return (
      <>
        <button onClick={logOut}>Sign out</button>
        <div>Hello, {auth.currentUser.displayName}</div>
      </>
    );
  } else {
    return <button onClick={signWithGoogle}> Sign in with Google</button>;
  }
};

export default Login;
