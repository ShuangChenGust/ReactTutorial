import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>welcome class {this.props.name}</h1>
            </div>
        )
    }
}

// destructuring:
// render(){
//     const {{name, firstname} = this.props}
//     const {stat1, state2} = this.state
//     return (
//         {name} {firstname}
//     )
// }