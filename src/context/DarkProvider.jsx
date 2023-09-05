import { createContext, useState } from "react";

const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};
export { DarkProvider };
export default DarkContext;
