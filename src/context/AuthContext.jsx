import { createContext, useCallback, useEffect } from 'react';
import { useState } from 'react';
import { postRequest } from '../utils/server';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const registerUser = useCallback(async () => {
    setIsRegisterLoading(true);
    try {
      const response = await postRequest('users/register', registerInfo);

      localStorage.setItem('user', JSON.stringify(response));
      setUser(response);
    } catch (error) {
      setRegisterError(error.message);
    } finally {
      setIsRegisterLoading(false);
    }
  }, [registerInfo]);

  const logoutUser = useCallback(() => {
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const loginUser = useCallback(
    async (user) => {
      try {
        const response = await postRequest('users/login', loginInfo);

        localStorage.setItem('user', JSON.stringify(response));
        setUser(response);
      } catch (error) {
        setRegisterError(error.message);
      } finally {
        setIsRegisterLoading(false);
      }
    },
    [loginInfo],
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginUser,
        updateLoginInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
