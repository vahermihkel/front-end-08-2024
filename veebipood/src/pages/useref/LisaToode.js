import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa juurde üks toode");
  const nimiRef = useRef(); // inputi luger --> tema abil saan teada, mida kasutaja kirjutas

  function sisesta() {
    //nimiRef.current.value; <-- nii siin ref-i seest väärtusi kätte
    // true ? _ : _    ternary operator
    if (nimiRef.current.value === "") {
      muudaSonum("Tühja nimega toodet ei saa lisada!");
      toast.error("Tühja nimega toodet ei saa lisada!");
    } else {
      muudaSonum("Toode lisatud: " + nimiRef.current.value);
      toast.success("Toode lisatud: " + nimiRef.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button> <br />

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        />
    </div>
  )
}

export default LisaToode