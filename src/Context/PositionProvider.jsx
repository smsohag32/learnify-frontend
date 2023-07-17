import { createContext, useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

export const PositionContext = createContext(null);
const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const userPosition = localStorage.getItem("position");
    console.log(userPosition);
    if (userPosition) {
      setPosition(userPosition);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <PositionContext.Provider value={{ position, loading }}>
      {loading ? <Spinner /> : children}
    </PositionContext.Provider>
  );
};

export default PositionProvider;
