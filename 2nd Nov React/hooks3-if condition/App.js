import {useState} from 'react'
function App(){
    const [state, setState] = useState('React')
    function updateState(){
        if(state==="React"){
        setState('React Application')
        }else{
            setState('React')
        }
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