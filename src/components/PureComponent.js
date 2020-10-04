//rpce
// Regular component: doesn't have shouldComponentUpdate methods, it always return true by default;
// ___
// A pure component on the other hand implements 
// shouldComponentUpdate with a shadow proprs and state comparastion.
import React, { PureComponent } from 'react'
import MemoComp from "./MemoComp"

class PureComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Shuang"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "shuang"
            })
        }, 2000)
    }
    
    
    render() {
        console.log("Pure")
        return (
            <div>
                Pure comp
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default PureComp
