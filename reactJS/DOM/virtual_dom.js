/*

D=Document -is html document
O-Object - h1, body, title
M-Model- Complete Html structure(document)

Add h2 in body tag

*/
    
var newElement=document.createElement("h2");
newElement.textContent="Aniket Rana H2";
// Body ke andar
document.querySelector("body").appendChild(newElement);

/*
React Virtual DOM is the copy of the existing DOM
In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object
Manipulating the virtual DOM is much faster because nothing gets drawn onscreen
Once the virtual DOM has been updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”

Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM.

By using Virtual DOM 
The final changes that happen in the virtual DOM is only reflected in real DOM  in react
/****************DIFFING VS RECONCILIATION 
In diffing react React calculates the difference (or "diff") between the previous Virtual DOM and the updated Virtual DOM

In Reconciliation involves comparing the previous Virtual DOM (the state of the UI as it was) with the updated Virtual DOM (the desired state of the UI) 

*/
