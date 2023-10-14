import React from "react";
import "./App.css";
import Header from "./components/Header";
import ClassHeader from "./components/ClassHeader";
import Channelstate from "./components/Channelstate";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import List from "./components/List";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import Routing1 from "./components/Routing1";
const name = <span>Github</span>;
const a = "jaiho";

// Without using JSX
const newElement = React.createElement(
  "h2",
  { className: "newElement" },
  "Without JSX"
);
// Without Jsx

// make a function

const test = function () {
  alert("Alert BOx");
};

// make arrow function
// remove function , go after  , then paste =>
const test1 = () => {
  alert("Alert BOx");
};

// making a function
const age = function (a) {
  if (a > 18) {
    return <span>YES</span>;
  } else {
    return <span>NO</span>;
  }
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassHeader />
        <Header />
        <Header name="Aniket" last="Rana" />
        <p>Aniket is a good boy</p>
        <Header name="Golu" last="Rana" />
        <Header />
        <h1>
          ANIKET RANA , {name} , {a}
        </h1>
        <h2>{newElement}</h2>
        <button onClick={test}></button>

        {/* for age */}
        {age(22)}
      </header>
      {/* Passing props in class component */}
      <ClassHeader name="CAniket" last="CRana"></ClassHeader>
      <Channelstate />
<div>
    <FunctionClick/>
</div>

<div>
    <ClassClick/>
</div>
<div>
  <List/>
  
</div>
<div>
 {/* if we write isvalue=true , we get color */}
  <Stylesheet isvalue={false}></Stylesheet>
</div>
<Inline/>
<div>
  <Form/>
</div>
<div>
<div>
  {/* we use this in tag form */}
  <Routing1></Routing1>
  </div>
</div>

    </div>
  );

  /*
Functional Components - They are the basic javascript functions, they are typically arrow function but can be created with regular function keyword

There is no render function in them
They can accept and use props


** Class Components : They make use of ES6 class and extend the component class in React.
We can pass props and can access using this.props
 */

  /* To use class component
  class App extends React.Component
  {
      render(){
        return <h1>JAi ho, class Component</h1>
      }
  }
export default App;

  */
}

export default App;
