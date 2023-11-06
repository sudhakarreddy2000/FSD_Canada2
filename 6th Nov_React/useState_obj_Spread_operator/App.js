import {useState} from 'react'
const clr={
    color:'red'
}
function App(){
    const [data,setData]=useState({fname:"Ravi", place:"Hyderabad"})
    // function handler(){
    //     setData({fname:'Ramesh', place:"Delhi"})
    // }

    //using with spread operator
    // setData({fname:'Ramesh'})  ==>this update only fname and lname dissapears so we should use spread operator
    // spread operator will keep previous data, only updates required data
    //setData({...data, fname:"Ramesh"})
    
    function handler(){
        setData({...data, fname:'Ramesh'})
    }
    return(
        <>
        <h2>React Hooks</h2>
        <h3>Hello <span style={clr}> {data.fname}</span> and place is <span style={clr}> {data.place}</span></h3>
        <button onClick={handler}>update array</button>
        </>
    )
}
export default App