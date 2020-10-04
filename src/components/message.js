import React, { Component } from 'react'

export default class message extends Component {
    constructor(){
        super();
        this.state = {
            message: "shuang is coming"
        }
    }
    handleChange(){
        this.setState({
            message: "thansk for subscribe"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.handleChange()}>subscribe</button>
            </div>
        )
    }
}
