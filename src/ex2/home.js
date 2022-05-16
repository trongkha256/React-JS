import React, { Component } from 'react';
import Header from './header';
import Carousel from './carousel';
import Activity from './activity';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Activity />
            </div>
        );
    }
}

export default Home;