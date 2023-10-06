import React, { Component } from 'react'
// we are using a map and it return a call back function for each element 
export class List extends Component {
  render() {
    const numbers=[1,2,4];

    // WE CAN SIMPLY REDUCE THIS TO 
    //     const newNumber=numbers.map((numbers)=>{
// <li>{numbers}</li>
//     })
    return (
        <>
        {/* THIS */}
      <div>List</div>
        {
        numbers.map((numbers)=><li>{numbers}</li> )
        }

      {/* <ul>{newNumber}</ul> */}
     
      </>
    )
  }
}

export default List