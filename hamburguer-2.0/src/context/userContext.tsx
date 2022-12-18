import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../api/api";
import {
  iLoginUser,
  iRegisterUser,
  iUserChildrenContext,
} from "../types/@types";
import { CartContext } from "./cartContext";

export const UserContext = createContext({} as iUserContext);

interface iUserContext {
  submitLogin: (data: iLoginUser) => void;
  submitRegister: (data: iRegisterUser) => void;
}

export const UserProvider = ({ children }: iUserChildrenContext) => {
  const { setProducts } = useContext(CartContext);

  const [userInfo, setUserinfo] = useState({});

  const navigate = useNavigate();

  async function submitLogin(data: iLoginUser) {
    try {
      const response = await api.post("/login", data);
      setProducts([]);
      setUserinfo(response.data);
      window.localStorage.clear();
      window.localStorage.setItem("UserToken", response.data.accessToken);
      setTimeout(() => navigate("/landing"), 2000);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async function submitRegister(data: iRegisterUser) {
    try {
      const reponse = await api.post("/users", data);
      console.log(reponse);
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      console.log(err);
    }
  }
  const token = localStorage.getItem("UserToken");
  useEffect(() => {
    async function autologin() {
      if (token) {
        try {
          const reponse = await api.get("/products", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setProducts(reponse.data);
          navigate("/landing");
        } catch (err) {
          localStorage.clear();
          navigate("/");
          console.log(err);
        }
      }
    }
    autologin();
  }, [token]);
  return (
    <UserContext.Provider value={{ submitLogin, submitRegister }}>
      {children}
    </UserContext.Provider>
  );
};
