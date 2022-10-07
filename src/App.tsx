import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { ContentRouter } from './pages/ContentRouter';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <ContentRouter />
          <Footer />
        </div>
      </Provider>
  );
}

export default App;
