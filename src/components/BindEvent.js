import React, { Component } from 'react';
import Hello from './Hello';
//'this' keyword is undefined because this used with a function returns 'window' object on the browser and 'global' object inside nodejs environment.
//  Since 'react strict mode' is enabled, it is returning 'undefined'.
class BindEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }

        this.handleEvent = this.handleEvent.bind(this);
    }
    
    // handleEvent(){
    //     this.setState({
    //         message : 'bye'
    //     })
    // }

    // approach4:
    handleEvent = () =>{
        this.setState({
            message: "bye"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.handleEvent.bind(this)}>click</button> */}
                {/* <button onClick={() => this.handleEvent()}>click</button> */}
                <button onClick={this.handleEvent}>Click</button>
            </div>
        );
    }
}

export default BindEvent;
