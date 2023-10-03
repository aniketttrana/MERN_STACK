import React, { Component } from "react";
// rce
export class ClassClick extends Component {
  constructor() {
    super();
    this.changeEvent = this.changeEvent.bind(this);

    this.state = {
      course: "MCA",
    };
  }

  changeEvent=() =>{
// lets change state
this.setState({
    course:"BBA"
})



    window.alert("ClassClick", this);
    window.alert("ANiket", this.state.course);
    //here we cant access this in this function
    //    1. with the help of arrow function
    // 2. By creating a constructor and access super keyword then bind this in that function
  }

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>ClassCliCK</button>

        <div>
          {/* we can also access here */}
          {this.state.course}
        </div>
      </div>
    );
  }
}

export default ClassClick;
