
import React, {useState} from 'react'
import './App.css'
import Laksuri from './Laskuri'
import Viesti from './Viesti'

const App = () => {



const[showLaskuri, setShowLaskuri] = useState(false)
const huomio =() =>{
  alert("Huomio!")
}


  return (
    <div className="App">
      <h1>Hello from react</h1>
      

      {showLaskuri && <Laksuri huomio ={huomio}/> }

      {showLaskuri && <button onClick={()=> setShowLaskuri(!showLaskuri)}> Piilota laksuri</button> }
      
      {!showLaskuri && <button onClick={()=> setShowLaskuri(!showLaskuri)}> Näytä laksuri</button> }

      <Viesti teksti = "tervehdys app komponentista"/>
    </div>
  )
}

export default App
