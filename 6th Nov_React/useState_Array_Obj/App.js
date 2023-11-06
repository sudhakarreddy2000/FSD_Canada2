import {useState} from 'react'
function App(){
    const [data, setData] = useState(['Anil','Sunil','Ajay','Vijay'])
    const [obj, setObj]=useState({id:1,name:'Peter',age:22})

    return(
        <>
        <h2>React Hooks</h2>
        <h3>{data} </h3>
        <h4>{data[2]}</h4>
        <h4>{obj.name}</h4>

        </>
    )
}
export default App