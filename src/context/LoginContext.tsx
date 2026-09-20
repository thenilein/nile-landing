"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LoginContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const LoginContext = createContext<LoginContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useLogin() {
  return useContext(LoginContext);
}

export function LoginProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
