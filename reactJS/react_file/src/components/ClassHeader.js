import React from "react";
class ClassHeader extends React.Component{
    render(){
        // we dont have to pass props in it 
        // we can access it simply by 
       
        return(
        <>
        <h1>Class Header{this.props.name}</h1>
      
        </>
        );
    }
}
export default ClassHeader;