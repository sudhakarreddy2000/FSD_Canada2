import {useState} from 'react'
function App(){
    const num=[10,20,30,40,50]
    const [data,setData]=useState(num)
 
    return(
        <>
        <h2>React Hooks</h2>
        {data.map((x)=><li>{x}</li>)}
        </>
    )
}
export default App