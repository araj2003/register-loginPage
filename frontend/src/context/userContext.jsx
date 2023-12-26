import axios from 'axios'

import { createContext, useEffect, useState } from 'react'

export const userContext = createContext()



export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/profile');
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        // Handle errors, e.g., if the user is not authenticated
        console.error('Error fetching user profile:', error);
      }
    };

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

    if (isLogin && token) {
      fetchData();
    }
  }, [isLogin]);

  return (
    <userContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      {children}
    </userContext.Provider>
  );
}
