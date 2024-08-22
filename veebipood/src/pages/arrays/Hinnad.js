import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, muudaHinnad] = useState([5, 99, 42, 8, 491, 71, 123, 321, 2120, 33]);

  // mitu tk välja näidatakse
  // tühjendamine
  // kui on tühi, siis anna sõnumiga teada, et ühtegi pole

  return (
    <div>
      <div>Kokku: {hinnad.length} tk</div>
      {hinnad.length > 0 && <button onClick={() => muudaHinnad([])}>Tühjenda</button>}
      {hinnad.length === 0 && <div>Ühtegi hinda pole!</div>}

      {hinnad.map(hind => <button>{hind}</button>)}
    </div>
  )
}

export default Hinnad