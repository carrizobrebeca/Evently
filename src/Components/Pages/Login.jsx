import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
        <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
    <button onClick={() => navigate("/home")}>
Ingresar
    </button>
    </div>

    
  )
}

export default Login