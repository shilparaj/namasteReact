import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
// React way of doing thing
let heading = React.createElement("div", {},[React.createElement("h1", { className: "sahdsahd"}, "hello World from first heading"),React.createElement("h1", {}, "hello World from second Heading")] );

//  JSX way of doing thing
let jsxHeading = <><h1 id="jsxText">hello world from jsx</h1></>

//funcitonal component way of doing thing 

const logoURL = "https://picsum.photos/80/100"

const Logo = () => (<img src={logoURL} alt="logo" />);

const Search = () => { const [searchTerm, setSearchTerm] = useState("");
    
  return (
 <input 
  type ="text"
   placeholder='Search'
   onChange = { (e) =>setSearchTerm(e.target.value)}
 />
  );

};

//also known as Compositional COmponents as we are using 1 or many components with in the component
const FuncHeading2 = () => {
   return (
    <header className="header">
        <Logo/>
        <Search />
        <Logo/>
   </header>
   );
};

console.log(FuncHeading2);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FuncHeading2/>);