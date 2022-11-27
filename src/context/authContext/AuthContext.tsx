import { createContext, useEffect, useReducer } from 'react';
import { USER_KEY } from '../const';
import { fetchUser } from './apiCall';
import AuthReducer from './AuthReducer';

const INIT_STATE = {
  error: false,
  isLoading: false,
  isLogin: false,
  user: JSON.parse(localStorage.getItem(USER_KEY) || '{}') || null,
};

export const AuthContext = createContext<any>(INIT_STATE);

const AuthContextProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AuthReducer, INIT_STATE);

  useEffect(() => {
    // refresh user data, update localStorage
    if (state.user?.user_id) fetchUser(state.user?.user_id, dispatch);
  }, [state.user?.user_id]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
