import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    const user = localStorage.getItem('user');
    setIsAuthenticated(isAuth === 'true');
    setUser(user);
  }, []);

  const login = (user) => {
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('user', user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('isAuth');
    setIsAuthenticated(false);
  };
  return { isAuthenticated, login, logout , user };
};

export default useAuth;
