import React, { Component } from 'react';
import '../header/Header.css';
class Header extends React.Component {
  render() {
    return (
      <div>
        <p className="header">
          THE CHILDRENS <br /> <span className="place"> PLACE </span>
        </p>
        <hr />
      </div>
    );
  }
}
export default Header;
