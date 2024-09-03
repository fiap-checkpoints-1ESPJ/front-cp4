import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Error from './components/Error';
import './Styles.css';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'produtos':
        return <Produtos />;
      case 'sobre':
        return <Sobre />;
      case 'contato':
        return <Contato />;
      default:
        return <Error />;
    }
  };

  return (
    <div>
      <Nav setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
