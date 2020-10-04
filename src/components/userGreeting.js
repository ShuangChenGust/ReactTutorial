import React, { Component } from 'react'

export default class userGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLog: false
        }
    }
    
    clickHandler(){
        this.state.isLog ? this.setState({isLog : false}) : this.setState({isLog : true})
    }

    render() {
        let message;
        if(this.state.isLog){
            message = <div>welcome Chan</div>
        }else{
            message = <div>welcome guest</div>
        }

        return (
            <div>
                {/* <div> this.state.isLog ? <div>welcome Chan</div> :  </div> */}
                <div>{message}</div>
                <button onClick = {() => this.clickHandler()}>change</button> 
                {/* // you have to bind it  */}
            </div>
        )
    }
}
