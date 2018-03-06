import React, {Component} from 'react';
import '../home/HomePage.css';
import withSizes from 'react-sizes';
import classNames from 'classnames';

class Row extends React.Component {
    render() {
        const { className, direction, children } = this.props;
        return <div className={classNames(className, 'rows', direction)}>{children}</div>;
    }
}

class HomePage extends React.Component{

    render(){
        const { width } = this.props;
        return(
            <Row className="home" direction={width > 480 ? 'row' : 'column'}>
                <div className="title">
                    <h1> Scan or  <br/>  Search items </h1>
                </div>
                <div className="search-box">
                    <input type="text" className="search" placeholder="Enter UPC / Keywords"/> 
                </div>
            </Row>
        );
    }
}

export default withSizes(HomePage);

