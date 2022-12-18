import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { CardCart } from "./cardCart/card";

import {
  BackgroudModal,
  FilledCart,
  HeaderCart,
  LineCart,
  TotalValueCart,
} from "./modalStyled";

export const ModalCart = () => {
  const { setCartOnOff, cartTotal, currentSale } = useContext(CartContext);

  return (
    <BackgroudModal>
      <FilledCart>
        <HeaderCart className="headerCartPosition">
          <span>Carrinho de compras</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCartOnOff(false);
            }}
          >
            X
          </button>
        </HeaderCart>
        <ul>
          {currentSale.map((e) => (
            <CardCart element={e}></CardCart>
          ))}
        </ul>
        <TotalValueCart>
          <span>Valor Total </span>
          <p>R$ {cartTotal}</p>
        </TotalValueCart>

        <LineCart />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="btnRemoverTudo"
        >
          Remover Tudo
        </button>
      </FilledCart>
    </BackgroudModal>
  );
};
