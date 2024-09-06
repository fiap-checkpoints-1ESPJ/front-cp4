import React from 'react';

const produtos = [
  { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1' },
  { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2' },
  { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3' }
];

const Produtos = () => {
  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {produtos.map(produto => (
          <div key={produto.id} className="card">
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
