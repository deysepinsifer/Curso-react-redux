import React from "react";
import "./App.css";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/fragmento";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

    <Card titulo="#05 - Componente com Filhos" color="orange">
     <Familia sobrenome="Ferreira"></Familia>
      <FamiliaMembro nome="Pedro"></FamiliaMembro>
      <FamiliaMembro nome="Maria"></FamiliaMembro>
      <FamiliaMembro nome="Paulo"></FamiliaMembro>
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
