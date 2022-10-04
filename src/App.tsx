import React from 'react';
import { Header } from './components/Header/Header';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;
