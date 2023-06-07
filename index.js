import React from 'react';
import ReactDOM from 'react-dom/client';

let heading = React.createElement("div", {},[React.createElement("h1", { className: "sahdsahd"}, "hello World from React"),React.createElement("h1", {}, "hello World from React")] );
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);