import React, { Component } from 'react';
import '../home/HomePage.css';
import '../../css/style.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="title">
          <h1>
            Scan or <br /> Search items
          </h1>
        </div>
        <div className="search-box">
          <input type="text" className="search" placeholder="Enter UPC / Keywords" />
        </div>
      </div>
    );
  }
}

export default HomePage;
