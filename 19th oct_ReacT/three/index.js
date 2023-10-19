import ReactDOM from 'react-dom';
import pic from './images/a1.jpg'
let player="data:image/jpeg;base64,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"
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
<>
<h1>hello React </h1>
<img src={pic} alt="picture"/>
<img src={player} alt="" />
<img src="logo192.png" alt=""/>
</>
 );