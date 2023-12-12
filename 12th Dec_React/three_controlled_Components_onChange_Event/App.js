import React, { useState } from "react";
function App() {
	const [state, setState]=useState('')
	function controller(e){
		setState(e.target.value)
	}
	return (
		<>
<h1>Controlled components</h1>
{state} <br/>
<input type="text" value={state} onChange={controller}/>
</>
	);
}
export default App;