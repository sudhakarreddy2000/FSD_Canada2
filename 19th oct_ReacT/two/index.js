import ReactDOM from 'react-dom';
const obj=new Date()
let h=obj.getHours()
let m=obj.getMinutes()
let s=obj.getSeconds()

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
<>
<h1>hello </h1>
<h2>{Date()}</h2>
<h2>{h}:{m}:{s}</h2>
</>
 );