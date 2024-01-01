// const heading = React.createElement("div", {id: 'paren'}, 
//     React.createElement("div", {id: 'children '}, 
//         React.createElement("h1", {id: 'headiafd'}, "Hello world from react")
//     )
// );
     
const heading = React.createElement("div", {}, 
    [
        React.createElement("div", {}, 
            [
                React.createElement("h1", {},"heading two 1"),
                React.createElement("h1", {},"heading two 2"),
                React.createElement("h1", {},"heading two 3"),
            ]),
        React.createElement("div", {},
            [   
                React.createElement("h1", {}, "heading two 1"),
                React.createElement("h1", {},"heading two 2"),
                React.createElement("h1", {},"heading  two 3"),
            ]         
        )
    ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);