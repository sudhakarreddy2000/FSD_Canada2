import React, { useState } from "react";
function App() {
	const [state, setState] = useState([])


		fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=de549631f71842a487f9623c01b9db10`)
			.then((val) => val.json())
			//.then((data) => console.log(data.articles))
			.then((data) => setState(data.articles))
	return (
		<>

			<h1>News Api</h1>
		{state.map((x)=><li>{x.title}</li>)}
		</>
	);
}
export default App;