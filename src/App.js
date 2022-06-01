import { useRef } from 'react';
import './App.css';

function App() {
  const inputname=useRef();

  const submitHendler= async ()=>{
    const name =inputname.current.value;
   
    await fetch('https://fir-da7eb-default-rtdb.firebaseio.com/UserName.json',{
      method:'POST',
      body:JSON.stringify({inp:name}),
      headers: {
        "Content-Type": "application/json",
      },
    });

  }
  const fetchData = async()=>{
   const res = await fetch('https://fir-da7eb-default-rtdb.firebaseio.com/UserName.json')
    const data =await res.json();
    const fetchName=[];
    for (const key in data) {
      fetchName.push({
        id: key,
        name:data.inp,
      });
    }
    console.log(data);

  }
  
  return (
    <div className="App">
      <input type="text" ref={inputname}/>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={submitHendler}>Submit Data</button>

      
    </div>
  );
}

export default App;
