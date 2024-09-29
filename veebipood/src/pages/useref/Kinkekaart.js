import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import ostukorvFailist from "../../data/ostukorv.json";

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
// {{{{{{{{{{{{{[[[[[((((([[{[]}]])))))]]]]]}}}}}}}}}}}}}

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
  // const [sonum, muudaSonum] = useState("");
  const showEmailRef = useRef();
  const [showEmail, setShowEmail] = useState(false);

  // function lisa() {

  // }

  const lisa = () => {
    // .current -> kontrollib kas ta on HTMLs
    // null -> tühjus, teab tüüpi, mis see tühjus on
    // undefined -> tühjus, ei tea mis see tühjus on
    // HTMLis olek on tühjus:
    //if (emailViide.current === undefined) {
    if (showEmailRef.current.checked === false) {
      toast.info("Lisasid ostukorvi, aga ilma e-mailita!");
      ostukorvFailist.push({
            "nimi": `Kinkekaart ${summa}€ - ${kogus} tk`, 
            "hind": summa * kogus, 
            "pilt": "PILT.jpg", 
            "aktiivne": true
          });
      return;
    }

    if (emailViide.current.value === "") {
      toast.error("Tühja e-mailiga ei saa ostukorvi lisada!");
      // muudaSonum("Tühja e-mailiga ei saa ostukorvi lisada!");
      return; // return on funktsiooni lõpetaja --> siit enam edasi ei minda
    }
    // 01234
    // neli@neli.ee
    if (emailViide.current.value[4] !== "@") {
  //if (emailViide.current.value.charAt(4) !== "@") {
  //if (emailViide.current.value.startsWith("@", 4) === false) {
      toast.error("Viies täht peab olema @ märk");
      return;
    }

    // kui pushin ostukorvi faili
    // kui pushin toodete faili
    // alati peab kuju olema: 
    // {"nimi": "Pakiautomaat", "hind": 3, "pilt": "PILT.jpg", "aktiivne": true}
    // ostukorvFailist.push({"nimi": "Kinkekaart " + kogus + " tk", "hind": summa * kogus, "pilt": "PILT.jpg", "aktiivne": true});
    ostukorvFailist.push({
  //  "nimi": "Kinkekaart " + summa + "€ - " + kogus + " tk",
      "nimi": `Kinkekaart ${summa}€ - ${kogus} tk`, 
      "hind": summa * kogus, 
      "pilt": "PILT.jpg", 
      "aktiivne": true
    });
    toast.success("Ostukorvi lisatud!");
    // muudaSonum("Ostukorvi lisatud!");

    // "" <-- samaväärsed
    // '' <-- samaväärsed
    // `` <-- back-tick. siia sisse saab muutujaid kirjutada sõnade vahele
  }

  const muudaShowEmail = () => {
    setShowEmail(showEmailRef.current.checked); // kui on checkboxist väärtuse lugemine, siis
    // loetakse ref.current.checked    kui on muu, siis ref.current.value
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

      <input onClick={muudaShowEmail} ref={showEmailRef} id="email_checkbox" type="checkbox" />
      <label htmlFor="email_checkbox">Saada kinkekaart e-mailile</label>

      <br />
      {/* <div>{sonum}</div> */}

      { showEmail === true &&
      <React.Fragment>
        <label htmlFor="email">E-mail</label>
        <input id="email" ref={emailViide} type="text" />
      </React.Fragment>}
      {/* React Fragment --> tühjus, sama mis tühjad nokad: <> </> */}

      <br /><br />
      <button onClick={lisa}>Lisa ostukorvi</button>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        />
    </div>
  )
}

export default Kinkekaart