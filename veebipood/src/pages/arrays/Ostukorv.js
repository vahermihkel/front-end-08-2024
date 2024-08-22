import React, { useState } from 'react'
import { Link } from "react-router-dom"

// suure tähega ja rohelised 
// HTMLs tuleb kõik importida
// "SMTH is not defined." kui pole imporditud

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

  return (
    <div>
      <div>Kokku: {ostukorv.length} tk</div>
      {ostukorv.length > 0 && <button onClick={() => muudaOstukorv([])}>Tühjenda</button>}

      <div>{ostukorv.map(toode => <div>{toode}</div>)}</div>

      {ostukorv.length === 0 && 
      <div>
        <div>Ostukorv on tühi</div>
        <Link to="/avaleht">Mine avalehele</Link>
      </div>}

      
    </div>
  )
}

export default Ostukorv