import React, { useState } from "react";

function App() {
	const [state, setState]=useState([])
	function test(){
		fetch('https://randomuser.me/api/?results=50')
		.then((result)=>result.json())
		//.then((val)=>console.log(val))
		.then((val)=>setState(val.results))
	}
	return (
		<>
<h1>react</h1>
{state.map((list)=><li>{list.name.first}</li>)}
<button onClick={test}>get data</button>
</>
	);
}

export default App;