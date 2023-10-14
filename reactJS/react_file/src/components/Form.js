// class component=
import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
        address:''
    };
  }

  handleUsername =(event)=>{
    this.setState({
        username:event.target.value
    })
  }
  handleAddress=(event)=>{
    this.setState({
        address:event.target.value
    })
  }
  render() {
    return (
      <>
        <div>Form</div>
        <form>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUsername}></input>
          <div>
          <label>Address</label>
          <input type="textarea" value={this.state.address} onChange={this.handleAddress}></input>
          </div>
        </form>
      </>
    );
  }
}
