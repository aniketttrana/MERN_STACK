import React from "react";
class Channelstate extends React.Component {
  // for using state we have to use constructor
  // we can change the state values by setState

  // The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders.
  constructor() {
    super();
    this.state = {
      msg: "My name is Aniket Rana",
    };
  }
  subscribe() {
    this.setState({
      msg: "LEARN OKOKOk",
    });
  }
  render() {
    return (
      <>
        <h1>Channel State</h1>
        <h2>{this.state.msg}</h2>
        <button
          onClick={() => {
            this.subscribe();
          }}
        >
          LEARN GUYS
        </button>
      </>
    );
  }
}
export default Channelstate;
/* 
    
 
/*
*State is used to store the data of the components                  
that have to be rendered to the view
*It holds the data and can change over time
*It can only be used in class components
*Event handlers generally update state


*Props are used to pass data and event handlers to the children components
*Props are immutable—once set, props cannot be changed
*Props can be used in both functional and class components
*The parent component sets props for the children components
*/
