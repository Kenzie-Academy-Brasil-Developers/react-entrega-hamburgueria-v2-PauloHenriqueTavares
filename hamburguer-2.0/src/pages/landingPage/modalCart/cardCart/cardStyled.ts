import styled from "styled-components";

export const CardLi = styled.li`
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    background-color: var(--Grey-20);
    min-width: 80px;
    min-height: 80px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70px;
      height: 70px;
    }
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    gap: 15px;

    h4 {
      margin-top: 5px;
      font-size: 18px;
      font-weight: 700;
    }
    span {
      font-weight: 400;
      font-size: 12px;
      color: var(--Grey-50);
    }
  }
  button {
    background-color: transparent;
    border: transparent;
    color: var(--Grey-40);
  }
`;
