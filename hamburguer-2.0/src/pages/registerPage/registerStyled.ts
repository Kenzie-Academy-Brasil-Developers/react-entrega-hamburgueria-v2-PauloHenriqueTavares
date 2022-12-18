import styled from "styled-components";

export const RegisterConteiner = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
`;

export const RegisterHeader = styled.header`
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  .dotsImg {
    display: none;
  }
  .logoConteiner {
    margin-bottom: 10px;
    width: max-content;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    .logo1 {
      font-size: 35px;
      font-weight: 700;
    }
    .logo2 {
      font-size: 25px;
      font-weight: 700;
      color: var(--Color-Secondary);
    }
  }
  @media (min-width: 1000px) {
    width: 400px;
    margin-bottom: 100px;
    margin-top: 0px;

    .dotsImg {
      display: block;
      width: 182px;
      height: 80px;
    }
  }
`;

export const RegisterForm = styled.form`
  width: 90%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--Grey-20);
  background-color: var(--White);
  border-radius: 6px;
  gap: 10px;
  margin-bottom: 40px;

  .descriForm {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      min-width: max-content;
      background-color: transparent;
      border: solid transparent;
      text-decoration: underline;
      font-size: 14px;
      line-height: 22px;
      font-weight: 500;
    }
  }
  p {
    width: 90%;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  input {
    width: 90%;
    height: 60px;
    border-radius: 10px;
    border: 2px solid var(--Black);
    font-size: 16px;
    color: var(--Black);
  }
  .spanNameInput {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 18px;
    right: 35%;
    background-color: var(--White);
  }

  span {
    font-size: 14px;
    font-weight: 400px;
    line-height: 15px;
    color: var(--Grey-45);
  }
  .btnRegister {
    border-radius: 8px;
    border: solid transparent;
    width: 90%;
    height: 60px;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    color: var(--Grey-45);

    &:hover {
      transition: 0.5s;
      background-color: var(--Color-primary);
      color: var(--White);
    }
  }
  @media (min-width: 1000px) {
    width: 500px;
  }
`;
