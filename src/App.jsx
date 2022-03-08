import React from "react";
import "./App.css";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/fragmento";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import UsuarioInfo from "./components/Condicional/UsusarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

    <Card titulo="#12 - Contador" color="#FFDAB9">
      <Contador numeroInicial={20}/>
     
    </Card>

    <Card titulo="#11 - Componente Controlado (Input)" color="#FFA500">
      <Input/>
     
    </Card>

    <Card titulo="#10 - Comunicação Inireta " color="#FF1493">
      <IndiretaPai/>
     
    </Card>

    <Card titulo="#09 - Comunicação Direta " color="#008B8B">
      <DiretaPai />
    </Card>

    <Card titulo="#08 - Renderização Condicional " color="#D8BFD8">
     <ParOuImpar numero = {20}></ParOuImpar>
     <UsuarioInfo usuario={{nome: "Fernando"}}/>
     <UsuarioInfo usuario={{email: "Fer@nando.com"}}/>
    </Card>

    <Card titulo="#07 - Desafio Repetição " color="#32CD32">
      <TabelaProdutos></TabelaProdutos>
    </Card>

    <Card titulo="#06 - Repetição" color="brown">
      <ListaAlunos></ListaAlunos>
    </Card>

    <Card titulo="#05 - Componente com Filhos" color="orange">
     <Familia sobrenome="Ferreira"/>
     <FamiliaMembro nome="Pedro"/>
      <FamiliaMembro nome="Maria"/>
       <FamiliaMembro nome="Paulo"/>
    </Card>

    <Card titulo="#04 - Desafio Aleatório" color="green">
      <Aleatorio min={1} max={60} />
    </Card>
    
    <Card titulo="#03 - Fragmento" color="red">
      <Fragmento />
    </Card>

    <Card titulo="#02 - Com Paramêtro" color="blue">
      <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />
    </Card>

    <Card titulo="#01 - Paramêtro Componente" color="pink">
      <Primeiro></Primeiro>
    </Card>
    </div>
  </div>
);
