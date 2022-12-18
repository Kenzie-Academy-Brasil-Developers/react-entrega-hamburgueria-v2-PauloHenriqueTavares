import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { iProductCard } from "../../../types/@types";
import { ButtonVerde, ProductsLi } from "./liStyle";

export const ProductCard = ({ element }: iProductCard) => {
  const { setCartTotal, cartTotal, currentSale, setCurrentSale } =
    useContext(CartContext);

  function addInfoCard() {
    const includs = currentSale.includes(element);

    if (includs === false) {
      setCartTotal(cartTotal + element.price);
      setCurrentSale([...currentSale, element]);
    }
  }

  return (
    <ProductsLi>
      <img src={element.img} alt={element.name} />
      <div>
        <p>{element.name}</p>
        <span>{element.category}</span>
        <p className="priceText">R$ {element.price}</p>
        <ButtonVerde
          onClick={() => {
            addInfoCard();
          }}
        >
          Adicionar
        </ButtonVerde>
      </div>
    </ProductsLi>
  );
};
