import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Pakiautomaadid from '../api/Pakiautomaadid';
// import ostukorvFailist from "../../data/ostukorv.json"

// suure tähega ja rohelised 
// HTMLs tuleb kõik importida
// "SMTH is not defined." kui pole imporditud

function Ostukorv() { // lehele tulles võetakse algväärtus useState sulgude seest
  const [ostukorv, muudaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const lisaPakiautomaat = () => {
    //muudaOstukorv(["Coca", "Fanta", "Sprite", "Red bull"])
    ostukorv.push({"nimi": "Pakiautomaat", "hind": 3, "pilt": "PILT.jpg", "aktiivne": true});
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));

    muudaOstukorv(ostukorv.slice());
  }

  // const lisaVichy = () => {
  //   //muudaOstukorv(["Coca", "Fanta", "Sprite", "Vichy"])
  //   ostukorvFailist.push("Vichy");
  //   muudaOstukorv(ostukorvFailist.slice());
  // }

            // seda sulgu täites, ütlen et saan selle muutuja sisu kätte onClick sulgude seest
  const lisa = (uusToode) => {
    ostukorv.push(uusToode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv)); // salvestuseks
    muudaOstukorv(ostukorv.slice()); // HTMLi uuenduseks
  }
              // kui tuleb sulgude seest tühjus/sõna, siis konventeerib 0-ks
  const kustuta = (index) => {
    ostukorv.splice(index,1);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    muudaOstukorv(ostukorv.slice());
  }

  const tyhjenda = () => {
    ostukorv.splice(0); // alates 0st, lõpuni välja kustutab
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    muudaOstukorv(ostukorv.slice());
  }

  // reegel: kõik muutujad võiks teha esimesena "const" ja kui on vajadus teda teist korda
  //          muuta siis võtan "const" eest ära

  // kui muudame sõnumit, tooteid, kogus --> me muudame seda useState kaudu, 
  //                    mitte otse võrdusmärgiga

  // const [sonum, muudaSonum]  ---> see const siin tähendab, 
  //                  et me ei saa otse võrdusmärgiga muutujat muuta
  // nii on keelatud:
  // sonum = "tere";

  // miks peame tegema muudaSonum("tere") kaudu --> see annab käskluse ka HTMLi uuendada

  // luba muuta: let

  const arvutaHinnadKokku = () => {
    let summa = 0;
    // summa = summa + 3;
    // summa = summa + 35000;
    // summa = summa + 85000;
    // [{n: "Coca", h: 3}, {n: "Fanta", h: 2}, {n: "Sprite", h: 2.5}]
    // .forEach({n: "Coca", h: 3} =>    3  = 0 + 3  )
    // .forEach({n: "Fanta", h: 2} =>   5  = 3 + 2  )
    // .forEach({n: "Sprite", h: 2.5}=>7.5 = 5 + 2.5  )
    ostukorv.forEach(toode => summa = summa + toode.hind);

    // 0 + 3
    // 3 + 35 000
    // 35 003 + 85 000
    return summa;
  }

  return (
    <div>
      {ostukorv.length > 0 && <div>Kokku: {ostukorv.length} tk</div>}

      {ostukorv.length > 0 && <button onClick={lisaPakiautomaat}>Lisa lõppu pakiautomaat juurde</button>}
      {/* <button onClick={lisaVichy}>Lisa lõppu Vichy juurde</button> */}

      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}

      {/* 3x: ["Coca", "Fanta", "Sprite"].map( => )
        1. ["Coca", "Fanta", "Sprite"].map("Coca" => <div>Coca</div> )
        2. ["Coca", "Fanta", "Sprite"].map("Fanta" => <div>Fanta</div> )
        3. ["Coca", "Fanta", "Sprite"].map("Sprite" => <div>Sprite</div> )
        */}
      <div>{ostukorv.map((toode, index) => 
        <div key={index}>
          {index}. {toode.nimi} - {toode.hind} - {toode.pilt} - {toode.aktiivne}
          <button onClick={() => lisa(toode)}>Lisa lõppu</button> 
          <button onClick={() => kustuta(index)}>x</button> 
        </div>)}
      </div>
      {/* <div>Coca</div>
      <div>Fanta</div>
      <div>Sprite</div>  */}

      {ostukorv.length === 0 && 
      <div>
        <div>Ostukorv on tühi</div>
        <Link to="/avaleht">Mine avalehele</Link>
      </div>}

        <br />
      {ostukorv.length > 0 && <Pakiautomaadid />}
        <br />
       {ostukorv.length > 0 && <div>Kokku: {arvutaHinnadKokku()} €</div>}
      
    </div>
  )
}

export default Ostukorv

// onClick={() => muudaSonum("UUS_SÕNUM")} <-- see on kui saadetakse midagi sulgude vahel
// onClick={lisa}  <--- see on kui ei saadeta midagi sulgude vahel
// onClick={() => kustuta(2)}
// onClick={sorteeri}

// kui pannakse funktsioon ilma klikita käima:
//  <div>{arvutaHinnadKokku()}</div>