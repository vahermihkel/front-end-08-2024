import React, { useRef, useState } from 'react'
import hinnadJSON from "../../data/hinnad.json";
import { Link } from 'react-router-dom';

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON.slice());
  const hindRef = useRef();
  const otsinguRef = useRef();

  const kustuta = (index) => {
    hinnadJSON.splice(index,1);
    muudaHinnad(hinnadJSON.slice());
  } 

  const lisa = () => {
    hinnadJSON.push({"number": hindRef.current.value, "lisaja": "Peeter"});
    muudaHinnad(hinnadJSON.slice());
  }

  const otsiHindadest = () => {
    const vastus = hinnadJSON.filter(hind => 
      String(hind.number).includes(otsinguRef.current.value)
    );
    muudaHinnad(vastus);
  }

  return (
    <div>
      <input type="text" ref={otsinguRef} onChange={otsiHindadest} />
      <br /><br />

      <label>Hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />

      <table className="halda">
        <thead>
          <tr>
            <th>ID</th>
            <th>Number</th>
            <th>Lisaja</th>
            <th>Tegevused</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
            <tr key={index}>
              <td>{index}</td>
              <td>{hind.number}</td>
              <td>{hind.lisaja}</td>
              <td>
                <button onClick={() => kustuta(index)}>x</button>
                <Link to={"/muuda-hind/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>)}
        </tbody>
      </table>

    </div>
  )
}

export default HaldaHinnad