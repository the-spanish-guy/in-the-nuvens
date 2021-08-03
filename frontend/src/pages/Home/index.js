import { MdHome } from "react-icons/md";

import logo from "../../assets/logo.png";

export default function Home() {
  const toggleMode = () => {
    const theme = localStorage.getItem("theme");

    if (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }

    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

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
        <button
          onClick={toggleMode}
          className="px-2 py-1 bg-purple-700 text-white text-center rounded mt-4"
        >
          toggle dark mode
        </button>
      </div>

      <div className="h-screen py-9 px-6 bg-pink-700 flex-1">
        <h1>Meus Arquivos</h1>
      </div>
    </div>
  );
}
