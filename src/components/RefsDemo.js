import React, { Component } from 'react'
import ReactDom from "react-dom"

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inpurRef = React.createRef();
    }
    
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default RefsDemo
