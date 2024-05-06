import React, { createContext, useContext, useState } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isLogging, setIsLogging] = useState(false);

  const login = useGoogleLogin({
    flow: 'auth-code',
    scope: 'https://www.googleapis.com/auth/calendar',
    onSuccess: async (codeResponse) => {
      try {
        const { code } = codeResponse;
        axios.post('http://localhost:4000/create-token', { code })
          .then(response => {
            console.log(response.data);
            setIsLogging(true);

          })
          .catch(error => console.log(error.message));
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => {
      console.log(error);
    }
  });


  const logOut = () => {
    googleLogout()
    setIsLogging(false)
  };

  return (
    <AuthContext.Provider value={{ isLogging, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
