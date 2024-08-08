import React from 'react'
import { Link } from "react-router-dom"

// suure tähega ja rohelised 
// HTMLs tuleb kõik importida
// "SMTH is not defined." kui pole imporditud

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv on tühi</div>
      <Link to="/avaleht">Mine avalehele</Link>
    </div>
  )
}

export default Ostukorv