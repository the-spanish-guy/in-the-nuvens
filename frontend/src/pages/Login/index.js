import "./index.css";

import logo from "../../assets/logo.png";

export default function Login() {
  return (
    <div className="bg-custom w-screen h-screen py-8 px-8 2xl:py-28 2xl:px-28">
      <div className="container w-2/5">
        <img className="w-48 h-12" src={logo} alt="logo" />
        <p className="text-4xl w-full mt-10 mb-10 2xl:my-16 2xl:mb-16">
          Armazene seus arquivos com facilidade
        </p>
        <div className="w-full h-2/4 mb-4 2xl:mb-14">
          <label htmlFor="user" className="text-xl mb-3">
            Usuário
          </label>
          <input
            type="text"
            id="user"
            className="w-full h-14 rounded-t-sm shadow-custom1"
          />
        </div>
        <div className="w-full h-2/4 mb-4 2xl:mb-14">
          <label htmlFor="password" className="text-xl mb-3">
            Senha
          </label>
          <input
            type="text"
            id="password"
            className="w-full h-14 rounded-t-sm shadow-custom1"
          />
        </div>

        <button className="w-full h-14 bg-primary rounded text-white text-2xl uppercase my-8">
          Criar conta
        </button>
      </div>
    </div>
  );
}
