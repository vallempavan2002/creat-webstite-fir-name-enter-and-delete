import './App.css';


import React, {useState } from'react';
function One(){
   const [count,setCount] = useState(0)
   const changeName =() =>{
     setCount(count+1);
    }
    const DisLike =() =>{
    setCount(count-1);
    }
return(
<>
<h1>{count}</h1>
<button onClick = {changeName} > Like </button>
<button onClick = {DisLike} > DisLike </button>
</>
)
}


function App() {
  return (
    <div className="App">
      <h1>hello this is my first react app</h1>
      <h2>i am learning react</h2>
      <h3>hello</h3>
      <One/>
    </div>
  );
}



export default App;