import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             comment: "",
             topic: "react"
        }
    }
    
    handleChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    
    handleComment = (event) => {
        this.setState({
            comment:event.target.value
        })
    }

    handleTopic = (event) => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) => {
        alert( `${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        username
                    </label>
                    <input type="text" value={this.state.username} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>comment</label>
                    <textarea 
                    value={this.state.comment}
                    onChange={this.handleComment}
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button  type="submit">submit</button>
            </form>
        )
    }
}

export default Form
