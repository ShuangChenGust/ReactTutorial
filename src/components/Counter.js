import React, { Component } from 'react'
//shortcut: rconst
class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    // increment(){
    //     this.setState({
    //         count : this.state.count +1
    //     },
    //     () =>{
    //         console.log('callback value', this.state.count)
    //     }
    //     )
    // }
    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incrementThree(){
        this.increment();
        this.increment();
        this.increment();
    }
    //if you not use useState hook, the web will not rerender in the page/
    render() {
        return (
            <div>Count - {this.state.count}
            <button onClick={()=> this. incrementThree()}>click+1</button>
            </div>
        )
    }
}

export default Counter
