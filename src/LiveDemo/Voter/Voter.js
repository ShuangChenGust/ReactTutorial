//

import React from 'react';

function PostButton(props){
  let style = {
    width:70,
    height:20,
    color: "green"
  };
  return(
    <button style={style} onClick={() => props.handleClick()}>{props.label}</button>
  );
}

function PostText(props){
  let style = {
    border: '1px solid black',
    width: props.width
  };
  return(
    <div style={style}>{props.text}</div>
  );
}

function Post(props){
  let style = {
    display:"flex"
  };
  return (
    <div style={style}>
      
      <PostText text = {props.title} width = "200"/>
      Votes:
      <PostText text = {props.score} width = "20" color="blue"/>
      <PostText text = {props.author} width = "20" color="blue"/> 
      <PostButton label = 'Upvote' handleClick = {props.incrementScore}/>
      <PostButton label = 'DownVote' handleClick = {props.decrementScore}/>
      <PostButton label = 'Delete' handleClick = {props.removeItem}/>
    </div>
  );
}

function PostList(props){
  return (
    <ol>
      {
        props.postList.map((item, index) => (
          <Post key = {index}
                title = {item.title}
                author = {item.author}
                score = {item.score}
                incrementScore = {() => props.updateScore(index, user, 1)}
                decrementScore = {() => props.updateScore(index, user, -1)}
          />
        ))
      }
    </ol>
  )
}

class Voter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
      items : [],
    }
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  
  addItem(){
    let itemsCopy = this.state.items.slice();
    let truncatedString = this.state.value.substring(0,20);
    itemsCopy.push({"title": truncatedString, "score":0})
    itemsCopy.sort((a,b) => {
      return b.score - a.score;
    })
    this.setState({items:itemsCopy, value:''});
  }
  
  updateScore(index, val){
    let itemsCopy = this.state.items.slice();
    itemsCopy[index].score += val;
    itemsCopy.sort((a,b) => {
      return b.score - a.score;
    })
    this.setState({ items: itemsCopy });
  }
  
  removeItem(index){
    var itemsCopy = this.state.items.slice();
    itemsCopy.splice(index, 1);
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({ items: itemsCopy });
  }
  
  render(){
    return(
      <div>
        <input value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button onClick = {() => this.addItem()}>Submit</button>
        <PostList postList = {this.state.items} 
                  updateScore = {this.updateScore.bind(this)}
                  removeItem = {this.removeItem.bind(this)}/>
      </div>
    );
  }
}

export default Voter;