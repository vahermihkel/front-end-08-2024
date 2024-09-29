import React from 'react'

// KODUS: Nagu Esindus, nagu Hind

// "eesnimi", "telefon", "email"
// võtmes mitte kasutada: tühik, punkt, sidekriips, kõiksugused märgid
// AINULT tähti, number, alumist kriipsu. Omniva tegi nii: A0_NAME

//Objects are not valid as a React child (found: object with keys {eesnimi, telefon, email})
// Vahepeal tuleb valge leht (kui oled refreshinud). 
// Parem klõps -> inspect -> console ja seesama veateade võib olla seal

// Tootajad.js -> panna võti juurde, et ei kuvaks errorit.
// HaldaTootajad.js -> tootaja.VÕTI
// YksTootaja.js -> leitud.VÕTI  /   vastus.VÕTI
// MuudaTootaja.js

// Early return, kui URLs on vale params

// Lisamised lisavad objektina

function YksTootaja() {
  return (
    <div>YksTootaja</div>
  )
}

export default YksTootaja