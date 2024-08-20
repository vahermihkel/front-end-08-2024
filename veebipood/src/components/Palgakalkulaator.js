import React, { useRef, useState } from 'react'

function Palgakalkulaator() {
  const brutopalkRef = useRef();
  const [brutopalk, muudaBrutopalk] = useState(0);
  const [aktiivne, muudaAktiivne] = useState("bruto"); // "fond", "bruto", "neto"

  const arvuta = () => {
    muudaBrutopalk(brutopalkRef.current.value);
  }

  return (
    <div>
      <label>Brutopalk</label>
      <input ref={brutopalkRef} type="text" />
      <button onClick={arvuta}>Arvuta</button>
      
      <table>
        <thead>
          <tr>
            <th></th>
            <th>EUR</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Palgafond:</td>
            <td>{brutopalk * 1.33}</td>
            <td>
              {aktiivne === "fond" && 100}
              {aktiivne === "bruto" && 133.00}
              {aktiivne === "neto" && 125.00}
              <button 
                className={aktiivne === "fond" ? "protsent-aktiivne": undefined} 
                onClick={() => muudaAktiivne("fond")}>O
              </button>
            </td>
          </tr>
          <tr>
            <td>Sotsiaalmaks:</td>
            <td>{brutopalk * 0.33}</td>
            <td>
              {aktiivne === "fond" && 24.81}
              {aktiivne === "bruto" && 33.00}
              {aktiivne === "neto" && 41.25}
            </td>
          </tr>
          <tr>
            <td>Brutopalk:</td>
            <td>{brutopalk}</td>
            <td>
              <button 
                className={aktiivne === "bruto" ? "protsent-aktiivne": undefined} 
                onClick={() => muudaAktiivne("bruto")}>O
              </button>
            </td>
          </tr>
          <tr>
            <td>Tulumaks:</td>
            <td>{brutopalk * 0.2}</td>
            <td>
              {aktiivne === "fond" && 15.04}
              {aktiivne === "bruto" && 20.00}
              {aktiivne === "neto" && 25.00}
            </td>
          </tr>
          <tr>
            <td>Netopalk:</td>
            <td>{brutopalk * 0.8}</td>
            <td>
              <button 
                className={aktiivne === "neto" ? "protsent-aktiivne": undefined} 
                onClick={() => muudaAktiivne("neto")}>O
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Palgakalkulaator