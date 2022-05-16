import React, { Component } from 'react';
import styles from "./demostate.module.css"
class DemoState extends Component {
    state = {
        isLoggedIn: false,
    };

    // renderHeader() {
    //     if (this.isLoggedIn) {
    //         return (
    //             <p>Hello, friend.</p>
    //         )
    //     }
    //     return (
    //         <div>
    //             <button>Đăng ký</button>
    //             <button>Đăng Nhập</button>
    //         </div>
    //     )
    // }
    handleLogin = () => {
        //Khi muốn xài this bình thường thì dùng arrow function
        this.setState({
            isLoggedIn: true,
        }, () => {
            console.log(this.state.isLoggedIn)
        });
        //this.setState có 2 param: 1 cái object và 1 hàm callback
    }
    addClass = (...classes) => {
        classes.join("");
    }
    render() {
        return (
            <div div className={this.addClass(styles.container, styles.wrapper)} >
                {/* <div div className={`${styles.container} ${styles.wrapper}`} > */}
                <h1
                    style={
                        { backgroundColor: '#ff0000' }
                    }>Demo State</h1>
                {/* {this.renderHeader()}; */}
                {
                    this.state.isLoggedIn ? <p>Hello, friend.</p> : <div>
                        <button>Đăng ký</button>
                        <button onClick={this.handleLogin}>Đăng Nhập</button>
                    </div>
                }
            </div >
        );
    }
}

export default DemoState;