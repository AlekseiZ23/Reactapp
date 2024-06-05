
import './App.css'
import React, {useState} from 'react'

const Laksuri = (props) => {

const [luku, setluku] = useState(0)
  
  return (
    <>

      <h3>{luku}</h3>

      <button onClick={() => setluku(luku + 1)}>+</button>


      <button onClick={props.huomio}>huomio</button>
    </>
  )
}

export default Laksuri
