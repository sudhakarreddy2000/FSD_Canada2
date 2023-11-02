import {useState} from 'react'
function App(){
    const [state, setState] = useState('Single Page Application')
    function updateState(){
        setState('React is used for SPA')
    }
    return(
        <>
        <h2>React Hooks</h2>
        <h3>{state} </h3>
        <button onClick={updateState}>update State</button>
        </>
    )
}
export default App