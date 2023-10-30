import ReactDOM from 'react-dom';
import fname, {lname, place, players,obj} from './data'
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
<>
<h1>importing and export data values</h1>
<h3>Hello {fname}</h3>
<h4>last name is {lname} and place is {place} </h4>
<h3>{players[2]}</h3>
<h3>{obj.name}</h3>
</>
 );