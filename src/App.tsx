import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CatalogPage } from './pages/CatalogPage';
import { Provider } from 'react-redux';
import { store } from './redux';

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
