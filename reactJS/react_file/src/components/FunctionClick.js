import React from 'react'

function FunctionClick() {

    function changeEvent(){
        document.write("EVENT");
    }




  return (
    <div>
        {/* change event should be function not function call */}
        <button onClick={changeEvent}>Click me</button>
    </div>
  )
}

export default FunctionClick