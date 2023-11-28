import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import About from './About'
import Contact from './Contact'
function App() {
    return (
        <>
	<h1>Routing Example</h1>
	<h3>SPA - Single page Application</h3>
	<BrowserRouter>
	<Link to='/about' className='text-danger text-decoration-none m-5'>About Us</Link>
	<Link to='/contact' className='text-danger text-decoration-none m-5'>Contact Us</Link>

	<Routes>
		<Route path="/about" element={<About/>}></Route>
		<Route path="/contact" element={<Contact/>}></Route>
	</Routes>
	</BrowserRouter>
        </>
    )
}
export default App