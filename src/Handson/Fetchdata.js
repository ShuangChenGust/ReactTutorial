import React, { Component } from 'react'
import Passvalue from './passvalue';

class Fetchdata extends Component {
    constructor(props) {
        super(props);
        this.state ={
            loading: true,
            person: null
        }
    }
    
    async componentDidMount(){
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], 
        loading: false
        
        
        });
        console.log(data.results);
    }

    render() {
        if (!this.state.person){
            return<div>
                didn't get a person
                </div>;
        }
        return (

            <div>
                {this.state.loading || !this.state.person ? 
                (<div>loading</div>) : 
                (<div>                
                    <div>{this.state.person.name.title}</div>
                    <div>{this.state.person.name.last}</div>
                    <div>{this.state.person.name.first}</div>
                    <img src={this.state.person.picture.large}></img>
                </div>)
                }
            </div>
        )
    }
}

export default Fetchdata
