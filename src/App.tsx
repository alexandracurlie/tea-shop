import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CatalogPage } from './pages/CatalogPage';

const App = () => {
  return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <CatalogPage />
          <Footer />
        </div>
      </Provider>
  );
}

export default App;
