import React, { useContext } from 'react';

import { useReducer, useStoreModule } from 'neomedic-helpers';

import api from './api';

/**
 * Default token
 */
const TOKEN_KEY = 'neomedic-token';
const TOKEN_USER = 'neomedic-user';

/**
 * Module reducer.
 */
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'merge': {
      return {
        ...state,
        ...payload,
      };
    }
  }
};


/**
 * Module context.
 */
export const AuthContext = React.createContext();


/**
 * Module provider.
 */
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    token: '',
    checked: false,
    isLoggedIn: false,
  });

  const {
    user,
    checked,
  } = state;

  /**
   * Fetch user.
   */
  const fetchUser = async (token) => {
    if (! token) {
      return null;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const {
        data,
      } = await api.get('/admin/user');

      await localStorage.setItem(TOKEN_USER, data);

      return data;
    } catch (err) {
      api.defaults.headers.common.Authorization = '';
    }

    return localStorage.getItem(TOKEN_USER);
  };

  /**
   * Check if user is authenticated.
   */
  const check = async (force = false) => {
    const token = await localStorage.getItem(TOKEN_KEY, state.token);

    try {
      if (checked && ! force) {
        throw user;
      }

      throw await fetchUser(token);
    } catch (user) {
      const isLoggedIn = !! (user && user.id);

      dispatch('merge', {
        user: isLoggedIn
          ? user
          : null,
        token,
        isLoggedIn,
        checked: true,
      });

      return isLoggedIn;
    }
  };

  /**
   * Authenticates user.
   */
  const login = async (username, password) => {
    const response = await api.post('/login', {
      username,
      password,
    });

    /**
     * Set token.
     */
    await localStorage.setItem(TOKEN_KEY, response.headers.authorization);

    return check(true);
  };

  /**
   * Logout user.
   */
  const logout = async () => {
    await localStorage.removeItem(TOKEN_KEY);
    await localStorage.removeItem(TOKEN_USER);

    dispatch('merge', {
      user: null,
      token: '',
      checked: false,
      isLoggedIn: false,
    });
  };

  /**
   * Provider value.
   */
  const value = useStoreModule(state, {
    check,
    login,
    logout,
  });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Module hook.
 */
export const useAuth = () => useContext(AuthContext);
