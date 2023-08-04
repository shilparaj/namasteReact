import React , {useState} from "react";

export default function Example() {
  // increment the count by 1 but
  // don't show values which are multiplier of 3
  // Eg: 1, 2, 4, 5, 7, 8, 10, 11, 13...
  const [count, setCount] = useState(0);

  const handleCount =() =>{
    console.warn(count, count%2 );
    if(count  == 0) { setCount((prev) =>prev+1)}
    else if((count+1) % 3){ setCount((prev) =>prev+1);}
    else { setCount((prev) =>prev+2);}
  }
  return (
    <div className="App">
      <h1>Hello Shilpa</h1>
      <h2>Please help me solve this issue</h2>
      <p>Count : {count}</p>
      <button onClick={handleCount}>Fix me!</button>
    </div>
  );
}
