import React from 'react';
import '../header/Header.css';
class Header extends React.Component{
    render(){
        return(
            <div>
            <p className="title"> THE CHILDRENS <br/> <span className="place"> PLACE </span> </p>
            <hr/>
            </div>
        );
    }
}
export default Header;