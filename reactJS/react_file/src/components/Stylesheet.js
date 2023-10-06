// rfce  - functional component

import React from "react";
import "./Style.css";

function Stylesheet(props) {
    let className=props.isvalue ? 'demo' :'demo1';
  return (
    <>
     {/* Template literal =to add more classes */}
      <h1 className={`${className} demo2`}> Hii Style Sheet</h1>
    </>
  );
}

export default Stylesheet;
