import React, { Component } from 'react';
import Header from './header/Header';
import HomePage from './home/HomePage';
import Footer from './footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
