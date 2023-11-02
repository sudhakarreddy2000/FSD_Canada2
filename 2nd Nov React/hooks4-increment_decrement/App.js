import {useState} from 'react'
function App(){
    const [num, setNum] = useState(0)
    const increment=()=>{
        setNum(num+1)
    }
    const decrement=()=>{
        setNum(num-1)
    }
    return(
        <>
        <h2>React Hooks</h2>
        <h3>{num} </h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default App