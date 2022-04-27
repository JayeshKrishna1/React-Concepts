import react from 'react';
import reactDom from 'react-dom';

function Greeting(){
  return (
    <div>
      <Name/>
    <College/>
    </div>
    
  )
}

const Name = () => <h1>Jayesh Krishna</h1>;
const College = () =>{
  return <p>Kongu Engineering college</p>
}

reactDom.render(<Greeting/>,document.getElementById('root'));