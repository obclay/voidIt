import React from 'react';

import './App.css';
import Main from './routes/Main';
import Footer from './footer';

const App = () => (
  <div>
    <header className="App-header">
      <h1 className="App-title">voidIt</h1>
      <p className="App-subtitle"></p>
    </header>

  
    <Main />
    <Footer />
  </div>
);

export default App;
