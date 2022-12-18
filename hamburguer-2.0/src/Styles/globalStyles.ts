import styled from "styled-components";

export const SloganConteiner = styled.div`
  background-color: var(--White);
  width: 100%;
  height: 95px;
  border: 1px solid var(--Grey-20);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .assentLogo {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    min-height: 60px;
    background-color: var(--Color-primaryOpaque);
    border-radius: 6px;
  }
  p {
    color: var(--Grey-50);
    margin-right: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
  @media (min-width: 1000px) {
    min-width: 400px;
    min-height: 95px;
    align-items: center;
    justify-content: center;
  }
`;
