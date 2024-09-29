import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import hinnadFailist from "../../data/hinnad.json";

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadFailist[index];
  const numberRef = useRef();

  const muuda = () => {
    hinnadFailist[index] = {"number": numberRef.current.value, "lisaja": "Toomas"};
  }

  // const leitud = ["BMW", "Nobe", "Tesla"][1]
  // leitud muutuja sees on nüüd "Nobe"

  // muutmiseks:
  // ["BMW", "Nobe", "Tesla"][1] = "Audi";
  // nüüd on "Nobe" asemel "Audi".
  // ["BMW", "Audi", "Tesla"]

  if (leitud === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input ref={numberRef} type="text" defaultValue={leitud.number} /> <br />
      <Link to="/halda-hinnad">
        <button onClick={muuda}>Muuda</button> <br />
      </Link>
    </div>
  )
}

export default MuudaHind