import React from "react";
import List from "../../components/List";
import NavBar from "../../components/NavBar";

const teste = [
  {
    nome: "aniversario",
    length: "19 arquivos",
    isFolder: true,
  },
  { nome: "file.svg", length: "1 arquivo", isFolder: false },
  {
    nome: "aniversario",
    length: "19 arquivos",
    isFolder: true,
  },
  { nome: "file.svg", length: "1 arquivo", isFolder: false },
  {
    nome: "aniversario",
    length: "19 arquivos",
    isFolder: true,
  },
  { nome: "file.svg", length: "1 arquivo", isFolder: false },
  {
    nome: "aniversario",
    length: "19 arquivos",
    isFolder: true,
  },
  { nome: "file.svg", length: "1 arquivo", isFolder: false },
];
const folders = [
  {
    nome: "aniversario",
    isFolder: true,
    length: "19 arquivos",
  },
  {
    nome: "aniversario",
    length: "19 arquivos",
    isFolder: true,
  },
  {
    nome: "aniversario",
    length: "19 arquivos",
    isFolder: true,
  },
  {
    nome: "aniversario",
    length: "19 arquivos",
    isFolder: true,
  },
  {
    nome: "aniversario",
    length: "19 arquivos",
    isFolder: true,
  },
];

export default function Home() {
  return (
    <div className="w-full h-full dark:bg-background-dark pl-56">
        <div className="w-10/12 py-9 px-6">
          <h1>Meus Arquivos</h1>

          <List data={teste} />
          <List data={folders} />
        </div>
    </div>
  );
}
