import { createContext } from "react";
import { useGlobalProvider } from "./useGlobalContext";

export const GlobalContext = createContext({});
export function GlobalProvider({ children }) {
  const value = useGlobalProvider();
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}