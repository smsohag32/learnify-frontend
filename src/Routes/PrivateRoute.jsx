import { useContext } from "react";
import { PositionContext } from "../Context/PositionProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { position } = useContext(PositionContext);
  if (position) {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default PrivateRoute;
