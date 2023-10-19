import ReactDOM from 'react-dom';
const uid="React"
let ans=""
if(uid != "React"){
    //alert("Uid is wrong")
    ans="UnAuthorised User"
    
}else{
    //alert("Authorised User")
    ans="Authorised User"
}
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
<>
<h1>hello </h1>
<h2>{ans}</h2>
</>
 );