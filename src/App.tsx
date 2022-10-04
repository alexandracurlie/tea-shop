import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CatalogPage } from './pages/CatalogPage';

const App = () => {
  return (
      <div className="App">
        <Header />
        <CatalogPage />
        <Footer />
      </div>
  );
}

export default App;
