import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import {
  LandingConteiner,
  LandingHeader,
  ProductsListUl,
} from "./landingStyled";
import { ModalCart } from "./modalCart/modal";
import { ProductCard } from "./productsLi/li";
const btnCart = require("./../../assents/btnCart.png");
const btnExit = require("./../../assents/btnExit.png");

export const LandingPage = () => {
  const navigate = useNavigate();

  const {
    products,
    setCartOnOff,
    cartOnOff,
    filteredProducts,
    setFilteredProducts,
  } = useContext(CartContext);

  const newProductsList = products.filter((produto) =>
    produto.name.toLowerCase().includes(filteredProducts.toLowerCase())
  );
  return (
    <LandingConteiner>
      <LandingHeader>
        <div className="logoConteiner">
          <p className="logo1">Burguer</p>
          <p className="logo2">Kenzie</p>
        </div>
        <div className="headerButton">
          <input
            onChange={(e) => {
              setFilteredProducts(e.target.value);
            }}
            type="text"
            placeholder=" Pesquisar..."
          />
          <button
            onClick={() => {
              setCartOnOff(true);
            }}
          >
            <img src={btnCart} alt="" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              localStorage.clear();
              setTimeout(() => navigate("/"), 1000);
            }}
          >
            <img src={btnExit} alt="" />
          </button>
        </div>
      </LandingHeader>
      <ProductsListUl>
        {newProductsList.map((e) => (
          <ProductCard element={e} />
        ))}
      </ProductsListUl>
      {cartOnOff ? <ModalCart /> : null}
    </LandingConteiner>
  );
};
