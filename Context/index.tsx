import React, { createContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

interface ContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextApi = createContext({} as ContextType);

export const ContextProvider = ({ children }: ContextProps) => {
  const [show, setShow] = useState(false);

  return (
    <ContextApi.Provider value={{ show, setShow }}>
      {children}
    </ContextApi.Provider>
  );
};
