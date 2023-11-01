import {useState} from 'react'

function App(){
    const [state, setState] = useState('Single Page Application')
    return(
        <>
        <h2>React Hooks</h2>
        <h3>{state} </h3>
        </>
    )
}
export default App