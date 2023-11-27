import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
    return (
        <>
	<h1>Routing Example</h1>
	<h3>SPA - Single page Application</h3>
	<BrowserRouter>
	<Routes>
		<Route path="/about" element={<h1>About Us Page</h1>}></Route>
		<Route path="/contact" element={<h2>Contact us page</h2>}></Route>
	</Routes>
	</BrowserRouter>
        </>
    )
}
export default App
