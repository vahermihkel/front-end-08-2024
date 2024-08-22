// simple react snippets: rfce

import React, { useState } from 'react'

function Avaleht() {
  const [kogus, muudaKogus] = useState(0); // saab kokku liita, et oleks suurem number
  const [sonum, muudaSonum] = useState("Muuda kogust!"); // isikukood, telefoninumber, postiindeks
  const [laigitud, muudaLaigitud] = useState(true); // boolean: tagurpidi keeramise võimekus
  // "no"   "yes" --> tagurpidi keeramine nö manuaalselt

  function v2henda() {
    muudaKogus(kogus - 1);
    muudaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    muudaKogus(kogus + 1);
    muudaSonum("Suurendasid kogust!");
  }

  function nulli() {
    muudaKogus(0);
    muudaSonum("Nullisid koguse!");
  }

  return (
    <div>
      <div>{laigitud === true && <img src="/laigitud.svg" alt="" /> }</div>
      <div>{laigitud === false && <img src="/mittelaigitud.svg" alt="" /> }</div>
      <button onClick={() => muudaLaigitud(true)}>Pane laik peale</button>
      <button onClick={() => muudaLaigitud(false)}>Võta laik maha</button>
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda laik-i</button>

      <br /><br />

      <div>{sonum}</div>
      <button disabled={kogus === 0} onClick={v2henda}>-</button>
      <button onClick={suurenda}>+</button>
      <br />
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <div className={kogus >= 10 ? "kuldne" : undefined}>{kogus} pcs</div>
    </div>
  )
}

// ternary operator
// KUI ON TÕSI ? TEE_SEDA : KUI_EI_OLNUD_TÕSI
// if (true) { TEE_SEDA } else { KUI_EI_OLNUD_TÕSI }

export default Avaleht