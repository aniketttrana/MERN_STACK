import React from 'react';
import "./App.css";

const name = <span>Github</span>
const a = "jaiho"

// Without using JSX
const newElement = React.createElement('h2', { className: 'newElement' }, 'Without JSX');
// Without Jsx


// make a function

const test=function(){
  alert("Alert BOx");
}

// make arrow function
// remove function , go after  , then paste =>
const test1=()=>{
  alert("Alert BOx");
}

// making a function 
const age=function(a){
  if(a>18){ return <span>YES</span>}
  else{return <span>NO</span>}
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ANIKET RANA , {name} , {a}</h1>
        <h2>{newElement}</h2>
        <button onClick={test}></button>



        {/* for age */}
        {age(22)}
      </header>
    </div>
  );
}

export default App;
