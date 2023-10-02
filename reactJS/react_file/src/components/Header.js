// we make component folder in src -- Header,js

// In class component we use this.props.name in function component we use props.name
// we cant change props value once defined
import React from "react";
// function Header(){
//     return <h1>This is Function</h1>
// }
//OR
const Header = (props) => {
  <>
   
    <h1>
      Hello {props.name} {props.last}
    </h1>
    {props.children}
  </>;
};
export default Header;
// now we inport it in App.js
