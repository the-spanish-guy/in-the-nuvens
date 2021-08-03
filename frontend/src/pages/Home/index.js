import { MdHome } from 'react-icons/md'

import logo from "../../assets/logo.png";

export default function Home() {

  return (
    <div className="w-screen h-screen dark:bg-background-dark flex">
      <div className="w-56 h-screen py-9 px-6">
        <img className="w-48 h-11" src={logo} alt="logo" />
        <div className="items">
          <div className="item">
            <MdHome size="24" color="text-red" />
            <span>Meus Arquivos</span>
          </div>
        </div>
      </div>

      <div className="h-screen py-9 px-6 bg-pink-700 flex-1">
        <h1>Meus Arquivos</h1>
      </div>
    </div>
  );
}
