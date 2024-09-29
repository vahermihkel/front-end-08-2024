import React, { useState } from 'react'
import { Link } from "react-router-dom"
 
function Tootajad() {
  const [tootajad, muudaTootajad] = useState (["Jüri", "Mari", "Jaan", "Leena", "Mati", "Kati"]);
 
// Sorteeri
  // 1. A-Z
  // 2. Z-A
  // 3. Tähed kasvavalt
  // 4. Tähed kahanevalt
  // 5. Teine täht A-Z

  // Filtreeri
  // 1. Täpselt 3 tähelised
  // 2. Rohkem kui 5 tähelised
  // 3. "ai" lühendit sisaldavad
  // 4. Kellel on neljas täht "i"
  // 5. 'M' tähega algavad
  // 6. Huvitav: Paarisarv tähti

  // Reset nupp

  // -------------

  // Faili tõstmine, nii siin, kui ka Haldas
  // Halda failis pane tähele, et kustutaksid ja lisaksid faili
  // .slice() <-- mälukoha katkemiseks (koopia tegemiseks), 
  //                et ei muudaks kogemata originaali

  return (
    <div>
      <div>
        <div>Kokku: {tootajad.length}</div>
        {tootajad.length > 0 && <button onClick={() => muudaTootajad([])}>Tühjenda</button>}
        <br/>
      </div>
      <div>{tootajad.map((tootaja, index) => <div key={index}>{tootaja}</div>)}</div>
      {tootajad.length === 0 && <div>Töötajaid ei ole</div>}
      <Link to="/avaleht">Mine avalehele</Link>
    </div>
  )
}
 
export default Tootajad