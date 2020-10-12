import React, { Component } from 'react'

export class test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userData: {}
        }
    }
    
    render() {
        var userName = this.userData;
        console.log(userName);
        return (
            <div>
                
            </div>
        )
    }
}

export default test
