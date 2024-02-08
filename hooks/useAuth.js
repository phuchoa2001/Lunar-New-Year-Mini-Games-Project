import { useState, useEffect } from 'react';
import addKeyLocalStorage from 'utils/localStorage';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuth = localStorage.getItem(addKeyLocalStorage('isAuth'));
    const user = JSON.parse(localStorage.getItem(addKeyLocalStorage('user')));
    setIsAuthenticated(isAuth === 'true');
    setUser(user);
  }, []);

  const login = (user) => {
    localStorage.setItem(addKeyLocalStorage('isAuth'), 'true');
    localStorage.setItem(addKeyLocalStorage('user'), JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem(addKeyLocalStorage('isAuth'));
    setIsAuthenticated(false);
  };
  return { isAuthenticated, login, logout, user };
};

export default useAuth;
