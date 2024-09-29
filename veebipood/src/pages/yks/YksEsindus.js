import React from 'react'
import { useParams } from 'react-router-dom'
import esindusedFailist from "../../data/keskused.json";

function YksEsindus() {
  // mis pandi kooloni sisse URLs
  const {index} = useParams();

  // esindused failist seest pean järjekorranumbriga võtma õige esinduse
  const vastus = esindusedFailist[index];

  // järjekorranumbriga leidmisega seotud näited:
  // a[1].localeCompare(b[1])
  // keskus[2] === "i"

  // kui ei leia õiget üles, siis tuleb vastuse kohapeale tühjus
  // kui on String (Ülemiste) -> siis näitas tühjana

  // kui on object ({"nimi": "Ülemiste"}) -> siis viskab errori

  // errori (veateate) leian üles lehel tehes: parem klõps -> inspect -> console

  if (vastus === undefined) {
    // kui on tingimused täidetud, siis siin kohal HTMLi väljakuvamine lõppeb
    return <div>
      <img src="https://hiiumaa.ecoop.ee/assets/img/icon-sad-empty-cart.svg" alt="" />
      <br />
      <button>Avalehele</button>
    </div>
  }

  return (
    <div>
      <div>URLs olev muutuja: {index}</div>
      <h2>Esinduse nimi: {vastus.nimi}</h2>
      <hr />
      <p>Aadress: {vastus.aadr}</p>
      <p>Telefon: {vastus.tel}</p>
    </div>
  )
}

export default YksEsindus