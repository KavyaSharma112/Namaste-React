import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS engine) - Parcel - Babel

// JSX =>Babel transpiles it to => React.createElement => ReactElement-JS object =>HTMLElement(render)
// jsx - HTML/XML like syntax

const Title = () => (
    <h1 className = "head">
    Namaste React using JSX!
    </h1>
);


// Functional React component 
const HeadingComponent = () => (
    <div id = "container">
        {Title()}
        <Title/>
        <h1>Hello noggler! this is a react functional component</h1>
    </div>
    );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);