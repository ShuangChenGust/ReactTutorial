import React, { Component } from 'react'
import './demo.css'

class Passvalue extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname : 'shawn',
            backgroud: 'green',
            show: true
        }
        this.handleInput = this.handleInput.bind(this);
        this.change = this.change.bind(this);
        this.toggle = this.toggle.bind(this);
     };
    //use lifecycle method to delay the action.
    componentDidMount() {
        setTimeout(
            () => this.change(),
            3000
            )
    }

    handleInput = (e) => {
        this.setState({firstname : e.target.value})
    }

    toggle(){
        this.setState(prevState =>({
            show: !prevState.show
        }))
    }
    change(){
        this.setState({
            backgroud : 'red'
        })
    }
    //use handle method to pass the value, bind in the constructor.
    render() {
        return (
            <div>
                <h1>{this.state.firstname}</h1>

                <input value = {this.state.firstname} onChange={this.handleInput}/>

                <div className="box" style={this.state.backgroud === 'green' ? {background:'green'} : {background : 'red'}}>

                </div>


                <div>
                    <input type="submit" value = "Click it" onClick={this.toggle}/>
                    {this.state.show === true ? <Result /> : null}
                </div>
            </div>
        )
    }
}

const Result = () =>(
    <div id = "result">
        Toggle content
    </div>
)


export default Passvalue
