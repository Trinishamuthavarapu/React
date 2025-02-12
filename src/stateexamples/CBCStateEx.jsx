import React, { Component } from 'react'

class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            username:"Trinisha"
        };
    }
    changeName=()=>{
        this.setState({username:"Ramya"});
    }
  render() {

    console.log(this);
    return (
      <div>CBCStateEx
        <h1>{this.state.username}</h1>
        <button onClick={this.changeName}>Update the State</button>
      </div>
      
    )
  }
}
export default CBCStateEx;
