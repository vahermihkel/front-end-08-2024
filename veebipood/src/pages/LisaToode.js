import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa juurde üks toode");
  const nimiRef = useRef(); // inputi luger --> tema abil saan teada, mida kasutaja kirjutas

  function sisesta() {
    //nimiRef.current.value; <-- nii siin ref-i seest väärtusi kätte
    // true ? _ : _    ternary operator
    if (nimiRef.current.value === "") {
      muudaSonum("Tühja nimega toodet ei saa lisada!");
    } else {
      muudaSonum("Toode lisatud: " + nimiRef.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode