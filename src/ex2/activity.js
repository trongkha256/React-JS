import React, { Component } from 'react';
import './activity.css'
class Activity extends Component {
    render() {
        return (
            <div>
                <div className="activity">
                    <div className="title">
                        <img className="img_title" src="./img/Group 313.png" alt />
                        <h1>Explore Destinations &amp; Activities</h1>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col">
                                <div className="item">
                                    <div className="thumnail">
                                        <img src="./img/product1.png" alt />
                                        {/*Trái Tim*/}
                                        <div className="heart"><i className="fa fa-heart" /></div>
                                    </div>
                                    <h1>Tricke Creek Racnh</h1>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quae doloremque expedita rem aperiam libero!</p>
                                    <a href="#">READMORE</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <div className="thumnail">
                                        <img src="./img/product4.png" alt />
                                        {/*Trái Tim*/}
                                        <div className="heart"><i className="fa fa-heart" /></div>
                                    </div>
                                    <h1>Tricke Creek Racnh</h1>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quae doloremque expedita rem aperiam libero!</p>
                                    <a href="#">READMORE</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <div className="thumnail">
                                        <img src="./img/product5.png" alt />
                                        {/*Trái Tim*/}
                                        <div className="heart"><i className="fa fa-heart" /></div>
                                    </div>
                                    <h1>Tricke Creek Racnh</h1>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quae doloremque expedita rem aperiam libero!</p>
                                    <a href="#">READMORE</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <div className="thumnail">
                                        <img src="./img/product1.png" alt />
                                        {/*Trái Tim*/}
                                        <div className="heart"><i className="fa fa-heart" /></div>
                                    </div>
                                    <h1>Tricke Creek Racnh</h1>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quae doloremque expedita rem aperiam libero!</p>
                                    <a href="#">READMORE</a>
                                </div>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="button">
                        <button className="bt1">View All</button>
                    </div>
                    <div className="clear" />
                </div>

            </div>
        );
    }
}

export default Activity;