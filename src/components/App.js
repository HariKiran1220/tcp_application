import React, {Component} from 'react';
import Header from './header/Header';
import HomePage from './home/HomePage';

class App extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <HomePage/>
            </div>
        );
    }
}

export default App;