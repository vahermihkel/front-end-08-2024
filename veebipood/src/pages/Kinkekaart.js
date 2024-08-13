import React, { useRef, useState } from 'react'

// VÄRVID:
// tumesinine - JavaScriptis liigitus, HTMLs liigitus
//             function, const          <div>, <button>
//             sissekirjutatud väärtused: undefined, true, false
// tavaline sinine - JavaScriptis muutujad, HTMLs muutujad
// helesinine - omadus, JavaScriptis võti, HTMLs atribuut
//                      .current.value      className, onClick, src, alt, type
// kollane - funktsioon. lõppeb sulgudega.
// lilla - käsklus. import, export, if, else, return
// valge - JavaScriptis igasugused märgid, väljanäidatav HTMLs
//          ===   &&   ;   =                <div>VALGE</div>
// oranž - sõna, string
// suure tähega ja roheline HTMLs - sisseimporditud HTML
// roheline - kommentaar
// heleroheline - number
//{{{{{{{{{{{{{[[[[[((((([[{[]}]])))))]]]]]}}}}}}}}}}}}}

// kaks kaldkriipsu --> kommentaar
// () ---> sulg funktsiooni jaoks
// [] ---> useState jaoks
// = ---> väärtuse andmiseks
// ; ---> semikoolon ehk rea lõpetaja, mis on vabatahtlik
// === ---> vasak ja parem pool on identne kontroll
// . ---> .current.value  läheb selle muutuja sisse
// > <  <=  >=  ---> suurem, väiksem, väiksem/võrdne, suurem/võrdne
// ?  :   ----> ternary operator, küsimärgi ees küsitakse kas on tõene, 
//              kui ei ole siis kooloni järgne võetakse kasutusele
// &&    ---> näidatakse paremat poolt kui vasak pool on tõene
// {}   ---> funktsiooni algus ja lõpp, if/else algus ja lõpp, HTMLs muutujate välja kuvamiseks
// () =>   funktsiooni tähistus

function Kinkekaart() {
  const [summa, muudaSumma] = useState(20);
  const [kogus, muudaKogus] = useState(1);
  const emailViide = useRef();
  const [sonum, muudaSonum] = useState("");

  // function lisa() {

  // }

  const lisa = () => {
    if (emailViide.current.value === "") {
      muudaSonum("Tühja e-mailiga ei saa ostukorvi lisada!");
      return; // return on funktsiooni lõpetaja --> siit enam edasi ei minda
    }
    muudaSonum("Ostukorvi lisatud!");
  }

  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne": "summa"} onClick={() => muudaSumma(20)}>20 €</button>
      <button className={summa === 50 ? "summa-aktiivne": "summa"} onClick={() => muudaSumma(50)}>50 €</button>
      <button className={summa === 100 ? "summa-aktiivne": "summa"} onClick={() => muudaSumma(100)}>100 €</button>

      <div>Kinkekaart {summa} €</div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => muudaKogus(kogus - 1)}>-</button>
      <span>{kogus} tk</span>
      <button onClick={() => muudaKogus(kogus + 1)}>+</button>

      <div>Kokku: {summa * kogus} €</div>

      <br /><br />

      <div>{sonum}</div>
      <label>E-mail</label>
      <input ref={emailViide} type="text" />
      <button onClick={lisa}>Lisa ostukorvi</button>
    </div>
  )
}

export default Kinkekaart