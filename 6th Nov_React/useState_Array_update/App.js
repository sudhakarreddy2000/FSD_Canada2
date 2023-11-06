import {useState} from 'react'
function App(){
    const [data, setData] = useState(['Anil','Sunil','Ajay','Vijay'])
    function handler(){
        setData(['Peter','John','Smith','Jain'])
    }
    return(
        <>
        <h2>React Hooks</h2>
        <h3>{data} </h3>
        <button onClick={handler}>update array</button>
        </>
    )
}
export default App