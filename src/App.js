
import { useState } from 'react';
import AgeCalc from './Components/AgeCalc';

function App() {
  
  const [date,setDate]=useState('');
  const [age,setAge]=useState(null);
  return (
    <div className="App">
      <AgeCalc
      date = {date}
      setDate = {setDate} 
      age = {age}
      setAge = {setAge}/>
    </div>
  );
}

export default App;
