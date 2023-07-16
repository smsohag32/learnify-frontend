import { createContext, useEffect, useState } from "react";

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
    <PositionContext.Provider value={{ position }}>
      {children}
    </PositionContext.Provider>
  );
};

export default PositionProvider;
