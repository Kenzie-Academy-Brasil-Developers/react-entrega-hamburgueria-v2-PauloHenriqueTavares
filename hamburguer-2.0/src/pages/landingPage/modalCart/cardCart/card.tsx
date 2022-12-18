import { useContext } from "react";
import { CartContext } from "../../../../context/cartContext";
import { iProductCard } from "../../../../types/@types";
import { CardLi } from "./cardStyled";

export const CardCart = ({ element }: iProductCard) => {
  const { setCurrentSale, currentSale, cartTotal, setCartTotal } =
    useContext(CartContext);

  function removeInfos() {
    const newCardCart = currentSale.filter((cart) => cart !== element);
    setCurrentSale(newCardCart);
    setCartTotal(cartTotal - element.price);
  }

  return (
    <CardLi>
      <div>
        <img src={element.img} alt="" />
      </div>
      <div className="cardInfo">
        <h4>{element.name}</h4>
        <span>{element.category}</span>
      </div>
      <button onClick={() => removeInfos()}>Remover</button>
    </CardLi>
  );
};
