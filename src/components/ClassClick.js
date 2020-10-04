//rcc
import React, { Component } from 'react'

export default class ClassClick extends Component {
    
    clickHandler(){
        console.log("click the");
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}
