import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("language", "tr");

  const toogle = () => {
    setLang(lang === "tr" ? "en" : "tr");
  };

  return (
    <Context.Provider value={{ lang, toogle }}>{children}</Context.Provider>
  );
};

export const Context = createContext();
export default ContextProvider;
