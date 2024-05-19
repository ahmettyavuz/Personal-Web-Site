import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("language", "tr");
  const [data, setData] = useState([]);

  const toogle = () => {
    setLang(lang === "tr" ? "en" : "tr");
  };

  useEffect(() => {
    axios
      .get("https://6647084651e227f23ab0c91f.mockapi.io/api/aydata")
      .then((res) => {
        setData(res.data);
        console.log("Veriler başarıyla getirildi:", res.data);
      })
      .catch((err) => console.log("Veriler getirilirken hata oluştu:", err));
  }, []);

  return (
    <Context.Provider value={{ lang, toogle, data }}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext();
export default ContextProvider;
