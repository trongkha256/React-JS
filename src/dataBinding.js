import React, { Component } from 'react';

class DataBinding extends Component {
    fullName = "Trung Hiếu";
    renderMessage() {
        const text = "Hello, My name is Kha";
        return text
    }
    showMessage() {
        console.log("hello")
    }
    render() {
        return (
            <div>
                <button onClick={this.showMessage()}>Show</button>
                <h1>Demo Data DataBinding</h1>
                <h2>Name: {this.fullName}</h2>
                <p>{this.renderMessage()}</p>
            </div>
        );
    }
}

export default DataBinding;