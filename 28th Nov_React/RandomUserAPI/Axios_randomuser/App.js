import React, { useState } from "react";

import axios from "axios";
function App() {
	const [state, setState]=useState([])
	function test(){
		axios.get("https://randomuser.me/api/?results=5")
		.then((res)=>{
			console.log(res)
			console.log(res.data.results)
			setState(res.data.results)
		})
	}
	return (
		<>
<h1>react</h1>
{state.map((list)=><li>{list.name.first}</li>)}
<button onClick={test}>get dta</button>
</>
	);
}

export default App;