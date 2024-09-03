import React from 'react';

const Nav = ({ setPage }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setPage('home')}>Home</button></li>
        <li><button onClick={() => setPage('produtos')}>Produtos</button></li>
        <li><button onClick={() => setPage('sobre')}>Sobre</button></li>
        <li><button onClick={() => setPage('contato')}>Contato</button></li>
      </ul>
    </nav>
  );
};

export default Nav;
