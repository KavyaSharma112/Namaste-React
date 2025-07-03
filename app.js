// const Parent = React.createElement( 
//     "div",
//     { id : "Parent"},
//     React.createElement(
//         "div",
//         { id : "children"},
//         [
//             React.createElement("h1", {}, "I am an h1 tag !"),
//             React.createElement("h2", {}, "I am an h2 tag !")
//         ]
//     )
// );

const Parent = React.createElement(
    "div",
    { id : "Parent"},
    [
        React.createElement(
            "div",
            { id : "child1"},
            [
                React.createElement("h1", {}, "Kavya you can do it !"),
                React.createElement("h2", {}, "Keep going !")
            ]
        ),
        React.createElement(
            "div",
            { id : "child2"},
            [
                React.createElement("h1", {}, "Google awaits you !"),
                React.createElement("h2", {}, "Stanford University has accepted you!")
            ]
        )
    ]
)


console.log(Parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);