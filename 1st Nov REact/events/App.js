function App(){
    function demo(){
        alert("example of onclick event")
    }
    return(
        <>
        <h2>events </h2>
        <button onClick={demo}>click me</button>
        <button onMouseOver={demo}>mouseover</button>
        <button onMouseOut={demo}>mouseout</button>
        </>
    )
}
export default App