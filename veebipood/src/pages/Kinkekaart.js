import React, { useState } from 'react'

function Kinkekaart() {
  const [summa, muudaSumma] = useState(20);

  return (
    <div>
      <button onClick={() => muudaSumma(20)}>20 €</button>
      <button onClick={() => muudaSumma(50)}>50 €</button>
      <button onClick={() => muudaSumma(100)}>100 €</button>

      <div>Kinkekaart {summa} €</div>

      <br /><br />

      <button>-</button>
      <span>1</span>
      <button>+</button>

      <br /><br />

      <label>E-mail</label>
      <input type="text" />
      <button>Lisa ostukorvi</button>
    </div>
  )
}

export default Kinkekaart