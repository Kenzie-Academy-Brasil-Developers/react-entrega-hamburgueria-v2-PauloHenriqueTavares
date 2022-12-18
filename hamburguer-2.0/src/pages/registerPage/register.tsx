import { SloganConteiner } from "../../Styles/globalStyles";
import {
  RegisterConteiner,
  RegisterForm,
  RegisterHeader,
} from "./registerStyled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { iDataRegister } from "../../types/@types";
import { useNavigate } from "react-router-dom";

const bagImg = require("./../../assents/bag.png");
const dotsImg = require("./../../assents/dotsImg.png");

export const RegisterPage = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatorio"),
    email: yup.string().required("Email obrigatorio").email(),
    password: yup.string().required("Senha obrigatoria"),
  });

  const { submitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <RegisterConteiner>
      <RegisterHeader>
        <div className="logoConteiner">
          <p className="logo1">Burguer</p>
          <p className="logo2">Kenzie</p>
        </div>
        <SloganConteiner>
          <div className="assentLogo">
            <img src={bagImg} alt="" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </p>
        </SloganConteiner>
        <img src={dotsImg} alt="" className="dotsImg" />
      </RegisterHeader>
      <RegisterForm onSubmit={handleSubmit(submitRegister)}>
        <div className="descriForm">
          <p>Cadastro</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="buttonReturnLogin"
          >
            Retornar para o login
          </button>
        </div>

        <span className="spanNameInput">Nome</span>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>
        <span className="spanNameInput">Email</span>
        <input
          type="text"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <span className="spanNameInput">Senha</span>
        <input
          type="text"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        <span className="spanNameInput">Senha</span>
        <input type="text" placeholder="Digite sua senha novamente" />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="btnRegister"
        >
          Cadastrar
        </button>
      </RegisterForm>
    </RegisterConteiner>
  );
};
