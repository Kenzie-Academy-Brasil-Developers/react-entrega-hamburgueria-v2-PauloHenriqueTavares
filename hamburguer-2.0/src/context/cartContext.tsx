import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { iUserChildrenContext } from "../types/@types";

export const CartContext = createContext({} as iCartContext);

interface iCartContext {
  setCartOnOff: React.Dispatch<React.SetStateAction<boolean>>;
  cartOnOff: boolean;
  setProducts: React.Dispatch<React.SetStateAction<Array<never>>>;
  products: Array<{
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
  }>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>;
  filteredProducts: string;
  setCurrentSale: React.Dispatch<
    React.SetStateAction<
      Array<{
        category: string;
        id: number;
        img: string;
        name: string;
        price: number;
      }>
    >
  >;
  currentSale: Array<{
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
  }>;
  setCartTotal: React.Dispatch<React.SetStateAction<number>>;
  cartTotal: number;
}

export const CartProvider = ({ children }: iUserChildrenContext) => {
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState("");
  const [cartOnOff, setCartOnOff] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([
    {
      category: "",
      id: 0,
      img: "",
      name: "",
      price: 0,
    },
  ]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    async function autologin() {
      const token = localStorage.getItem("UserToken");
      if (token) {
        try {
          const reponse = await api.get("/products", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setProducts([]);
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
  }, []);

  return (
    <CartContext.Provider
      value={{
        setProducts,
        products,
        cartOnOff,
        setCartOnOff,
        filteredProducts,
        setFilteredProducts,
        currentSale,
        setCurrentSale,
        cartTotal,
        setCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
