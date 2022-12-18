import styled from "styled-components";

export const LandingConteiner = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LandingHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--Grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15%;
  .logoConteiner {
    width: max-content;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .logo1 {
      font-size: 25px;
      font-weight: 700;
    }
    .logo2 {
      font-size: 15px;
      font-weight: 700;
      color: var(--Color-Secondary);
    }
  }
  .headerButton {
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: center;

    input {
      width: 60%;
      height: 30px;
      border-radius: 6px;
      border: 2px solid var(--Black);

      &:hover {
        transition: 0.3s;
        border-color: var(--Color-primary);
      }
    }
    button {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: solid transparent;
      background-color: transparent;
      img {
        width: 25px;
        height: 20px;
      }
    }
  }
`;
export const ProductsListUl = styled.ul`
  max-width: 90%;
  display: flex;
  gap: 20px;
  margin-left: 16px;
  overflow-x: scroll;
  margin-top: 15px;
  @media (min-width: 800px) {
    justify-content: center;
    overflow: unset;
    width: 90%;
    height: 700px;
    flex-wrap: wrap;
  }
`;
