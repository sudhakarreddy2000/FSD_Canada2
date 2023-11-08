import '../node_modules/bootstrap/dist/css/bootstrap.css'
import data from './user.json'
import { useState } from 'react'
function App() {
    const [state, setState] = useState(data)
    return (
        <>
            {/* {state.map((n)=><li>{n.id}</li>)} */}
            <ul className="list-group">
                <li className="list-group-item active">Names</li>
                {state.map((n) =>
                    <>
                        <li className="list-group-item">{n.name}</li>
                    </>
                    )}
            </ul>

        </>
    )
}
export default App