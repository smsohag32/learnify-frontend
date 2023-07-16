// UserProvider.js
import React, { createContext, useEffect, useState, useContext } from "react";
import useSecureAuth from "./useSecureAuth"; // Assuming this hook handles API authentication

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { secureAuth } = useSecureAuth();
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await secureAuth.get("/api/v1/user/details");
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // Handle any errors
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [secureAuth]);

  const authInfo = {
    user,
    loading,
  };
  return (
    <UserContext.Provider value={authInfo}>
      {loading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  );
};

export default UserProvider;
