import produtos from "../../data/produtos";
import React from "react";
import './TabelaProduto.css'

export default (props) => {

  function getLinhas() {
    return produtos.map((produto, i) => {
      return(
        <tr key={produto.id} className={i % 2 === 0? 'Par' : 'Impar'}>
          <td>{produto.id}</td>
          <td>{produto.produto}</td>
          <td>R$ {produto.preco.toFixed(2)}</td>
        </tr>
      )
    })
  }

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>
            {getLinhas()}
        </tbody>
      </table>
    </div>
  );
};
