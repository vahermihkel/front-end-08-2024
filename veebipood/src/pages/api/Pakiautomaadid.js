import React, { useEffect, useState } from 'react'

function Pakiautomaadid() {
  const [pakiautomaadid, setPakiautomaadid] = useState([]);

  // uef
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(body => setPakiautomaadid(body))
  }, []);

  return (
    <select>
      {pakiautomaadid.map(automaat => <option>{automaat.NAME}</option>)}
    </select>
  )
}

export default Pakiautomaadid