import { createContext, useState } from "react";

const ToogleContext = createContext({});

export const ToogleProvider = ({ children }) => {
  const [toogle, setToogle] = useState("table");
  return (
    <ToogleContext.Provider value={{ toogle, setToogle }}>
      {children}
    </ToogleContext.Provider>
  );
};

export default ToogleContext;
