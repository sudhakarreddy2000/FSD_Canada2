import React, { useState } from "react";
function App() {
	const [state, setState] = useState('')
	const handler = (e) => {
		setState(e.target.value)
	}
	function submitHandler(e) {
		e.preventDefault()
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=4a104e91faf5c441f4589c6e06f17d9f`)
			.then((val) => val.json())
			//.then((data) => console.log(data.main.temp))
		.then((data)=>{
			const kelvin=data.main.temp
			const celsius=kelvin-273.15
			setState(Math.round(celsius))
		})
	}
	return (
		<>
			<h3>{state}</h3>
			<h1>Weather Api</h1>
			<form onSubmit={submitHandler}>
				<input type="text" value={state} onChange={handler} />
				<br />
				<input type="submit" />
			</form>
		</>
	);
}
export default App;