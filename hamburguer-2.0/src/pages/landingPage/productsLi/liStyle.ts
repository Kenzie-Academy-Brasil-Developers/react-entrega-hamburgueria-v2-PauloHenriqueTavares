import styled from "styled-components";

export const ProductsLi = styled.li`
  min-width: 300px;
  max-width: 300px;
  height: 346px;
  border: 2px solid var(--Grey-20);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  gap: 16px;
  background-color: var(--Grey-0);

  img {
    width: 150px;
    height: 150px;
  }
  div {
    background-color: var(--White);
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;

    p {
      margin-left: 21px;
      font-size: 18px;
      font-weight: 700;
    }
    span {
      margin-left: 21px;
      font-size: 12px;
      font-weight: 400;
      color: var(--Grey-50);
    }
    .priceText {
      margin-left: 21px;
      font-size: 14px;
      font-weight: 600;
      color: var(--Color-primary);
    }
    button {
      margin-left: 21px;
    }
  }
`;
export const ButtonVerde = styled.button`
  width: 107px;
  height: 40px;
  background-color: var(--Color-primary);
  color: white;
  border-radius: 8px;
  border: solid transparent;
  margin-right: 10px;
`;
