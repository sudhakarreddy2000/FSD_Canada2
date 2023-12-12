import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";
function App() {
	const [state, setState]=useState([])
	function test(){
		axios.get("https://randomuser.me/api/?results=15")
		.then((res)=>{
			setState(res.data.results)
		})
	}
	return (
		<>
<h1>react</h1>
{/* {state.map((list)=><li>{list.name.first}</li>)} */}
{/* {state.map((list)=><img src={list.picture.medium} alt=''/>)} */}

<button onClick={test}>get data</button>
<div className='container'>
	<div className="row">
	{state.map((list)=>
		<div className="col-md-4">
		<div class="card">
  <img src={list.picture.medium} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{list.name.first}</h5>
  </div>
</div>
		</div>
		)}
	</div>
</div>
</>
	);
}

export default App;