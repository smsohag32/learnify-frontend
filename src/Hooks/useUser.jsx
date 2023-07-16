import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

const useUser = () => {
  const auth = useContext(UserContext);
  return auth;
};

export default useUser;
