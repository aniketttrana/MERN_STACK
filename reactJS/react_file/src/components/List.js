import React, { Component } from 'react'
// we are using a map and it return a call back function 
export class List extends Component {
  render() {
    const numbers=[1,2,4];
//     const newNumber=numbers.map((numbers)=>{
// <li>{numbers}</li>
//     })
    return (
        <>
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