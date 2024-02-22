import React from "react";
import { observer } from "mobx-react-lite";
import { GoogleLogin } from "@react-oauth/google";

const Login = observer(() => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
});

export default Login;
