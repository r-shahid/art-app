import React from 'react';
import './styles.css';
import './styles-tab.css'
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
// import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
