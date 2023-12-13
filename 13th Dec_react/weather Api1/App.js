import React, { useState } from "react";
function App() {
	const [state, setState]=useState('')
fetch('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=4a104e91faf5c441f4589c6e06f17d9f')
.then((val)=>val.json())
//.then((data)=>console.log(data.main.temp))
.then((data)=>setState(data.main.temp))
	return (
		<>
		<h3>{state}</h3>
<h1>Weather Api</h1>

</>
	);
}
export default App;