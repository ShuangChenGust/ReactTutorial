import React, { Component } from 'react'
import axios from "axios";

import Registration from "./Registration"
import Login from "./Login"

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    
    handleSuccessfulAuth(data){
        this.props.handleLogin(data);
        this.props.history.push('/dashboard')
    }

    handleLogoutClick(){
        axios
            .delete("http://3001/logout", {withCredentials:true})
            .then(response =>{
                this.props.handleLogout();
            })
            .catch(error =>{
                console.log("logout error", error);
            });
    }


    render() {
        return (
            <div>
                <h1>home</h1>
                <h2>statues:{this.props.loggedInStatus}</h2>
                <button onClick={() => this.handleLogoutClick()}>Logout</button>                
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}

export default Home
