import styled from "styled-components";

export const BackgroudModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderCart = styled.div`
  width: 100%;
  height: 65px;
  background-color: var(--Color-primary);
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    color: var(--White);
    font-size: 18px;
    font-weight: 700;
  }
  button {
    background-color: transparent;
    color: var(--White);
    border: solid transparent;
    font-size: 20px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FilledCart = styled.div`
  width: 345px;
  min-height: 223px;
  height: 1000px;
  height: max-content;
  background-color: var(--Grey-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 18px;
  margin-bottom: 100px;

  ul {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    gap: 20px;
  }
  .btnRemoverTudo {
    width: 90%;
    height: 60px;
    color: var(--Grey-50);
    background-color: var(--Grey-20);
    border: transparent;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .btnRemoverTudo:hover {
    transition: 0.3s;
    color: var(--White);
    background-color: var(--Color-primary);
  }
  @media (min-width: 1600px) {
    margin-top: 16px;
  }
`;
export const LineCart = styled.div`
  width: 90%;
  height: 2px;
  background-color: var(--Grey-20);
`;

export const TotalValueCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  p {
    font-size: 14px;
    color: var(--Grey-50);
  }
  span {
    font-size: 14px;
    color: var(--Grey-50);
  }
`;
