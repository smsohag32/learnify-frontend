// UserProvider.js
import { createContext, useEffect, useState } from "react";
import useSecureAuth from "../Hooks/useSecureAuth";
import Spinner from "../components/Spinner/Spinner";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { secureAuth } = useSecureAuth();
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await secureAuth.get("/api/v1/user/details");
        setUser(res.data.user_data);
        setLoading(false);
      } catch (error) {
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
      {loading ? <Spinner /> : children}
    </UserContext.Provider>
  );
};

export default UserProvider;
