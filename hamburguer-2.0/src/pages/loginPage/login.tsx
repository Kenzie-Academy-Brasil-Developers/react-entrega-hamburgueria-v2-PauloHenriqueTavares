import { useForm } from "react-hook-form";
import { SloganConteiner } from "../../Styles/globalStyles";
import { LoginConteiner, LoginForm, LoginHeader } from "./loginStyled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { iDataLogin } from "../../types/@types";
import { useNavigate } from "react-router-dom";
const bagImg = require("./../../assents/bag.png");
const dotsImg = require("./../../assents/dotsImg.png");

export const LoginPage = () => {
  const navigate = useNavigate();
  const { submitLogin } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email(),
    password: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({
    resolver: yupResolver(formSchema),
  });

  return (
    <LoginConteiner>
      <LoginHeader>
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
      </LoginHeader>
      <LoginForm onSubmit={handleSubmit(submitLogin)}>
        <p>Login</p>
        <span className="spanNameInput">Email</span>
        <input
          type="text"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <span className="errorInfo">{errors.email?.message}</span>
        <span className="spanNameInput">Senha</span>
        <input
          type="text"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <span className="errorInfo">{errors.password?.message}</span>

        <button>Logar</button>
        <span className="spanDescriRegis">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Cadastrar
        </button>
      </LoginForm>
    </LoginConteiner>
  );
};
