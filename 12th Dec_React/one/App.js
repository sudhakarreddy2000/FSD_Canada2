import React, { useState } from "react";

import axios from "axios";
function App() {
	const [state, setState]=useState([])
	function test(){
		axios.get("https://randomuser.me/api/?results=15")
		.then((res)=>{
			console.log(res)
			console.log(res.data.results)
			setState(res.data.results)
		})
	}
	return (
		<>
<h1>react</h1>
{/* {state.map((list)=><li>{list.name.first}</li>)} */}
{state.map((list)=><img src={list.picture.medium} alt=''/>)}

<button onClick={test}>get data</button>
</>
	);
}

export default App;