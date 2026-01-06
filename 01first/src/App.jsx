import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'bootstrap'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className=" w-100 min-vh-100 text-center text-info " style={{ backgroundColor: color }} >
     <div className="d-flex flex-wrap p-5 justify-content-center fixed-bottom bottom-50 ">
      <div className=" d-flex flex-wrap bg-light justify-content-center gap-3 p-3 rounded-5  " >
        <button onClick={() => setColor('red')} 
        className=" btn btn-outline-light  text-black "
        style={{ backgroundColor: "red" }}>red</button>

        <button onClick={() => setColor('black')} 
        className=" btn btn-outline-light  text-light "
        style={{ backgroundColor: "black" }}>black</button> 

        <button onClick={() => setColor('green')} 
        className=" btn btn-outline-light  text-black "
        style={{ backgroundColor: "green" }}>green</button>           
        
        <button onClick={() => setColor('skyblue')} 
        className=" btn btn-outline-light  text-black "
        style={{ backgroundColor: "skyblue" }}>skyblue</button>   
        
        <button onClick={() => setColor('orange')} 
        className=" btn btn-outline-light  text-black "
        style={{ backgroundColor: "orange" }}>orange</button>   
        
        <button onClick={() => setColor('yellow')} 
        className=" btn btn-outline-light  text-black "
        style={{ backgroundColor: "yellow" }}>yellow</button>           
      </div>
     </div>
    </div>
  )
}

export default App
