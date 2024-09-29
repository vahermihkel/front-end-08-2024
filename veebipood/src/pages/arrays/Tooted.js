import React, {useState} from 'react'
import ostukorvFailist from "../../data/ostukorv.json"
import tootedFailist from "../../data/tooted.json"

function Tooted() {

  const [tooted, uuendaTooted] = useState(tootedFailist.slice());

   // Sorteeri
  // 1. A-Z
  // 2. Z-A
  // 3. Tähed kasvavalt
  // 4. Tähed kahanevalt

  // Filtreeri
  // 3 nuppu: Bga algavad, Nga algavad, Tga algavad

  // Reset nupp

  // -------------

  // Faili tõstmine, nii siin, kui ka Haldas
  // Halda failis pane tähele, et kustutaksid ja lisaksid faili
  // .slice() <-- mälukoha katkemiseks (koopia tegemiseks), 
  //                et ei muudaks kogemata originaali
  const lisaOstukorvi = (uusToode) => {
    ostukorvFailist.push(uusToode);
    // ei pea HTMLi uuendama, sest ostukorvi nimekiri ei pea siin HTMLs
    // uuenema

    // hot-toast või toastify hüpikaken koos sisuga "Ostukorvi lisatud"
  }


     //kui koopiat ei tee, siis toimub muteerumine (originaali kallale minek) 
    //      ehk muutus ilma et tuleksid uued väärtused
    //      kood näeb seda kui lihtsat muudatust ja vaatab, 
    //      et selle pärast pole vaja HTMLi muutma minna

    // muteerivad (muudavad originaali):
    // .push()
    // .splice()
    // .sort()

    // ei muuda originaalset --> tema ette peab panema uue muutuja
    // .filter()
    // .map()
    // const vastus =


  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.localeCompare(b, "et"));
    uuendaTooted(tooted.slice());
    //uuendaTooted([...tooted]); // koopia tegemiseks nagu .slice()
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.localeCompare(a, "et"));
    uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKasvavalt= () => {
    tooted.sort((a,b) => a.length - b.length);
    uuendaTooted(tooted.slice());
  }

  const sorteeriTahedKahanevalt= () => {
    tooted.sort((a,b) => b.length - a.length);
    uuendaTooted(tooted.slice());
  }

  // const filtreeriAlgavadB = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("B"));
  //   uuendaTooted(vastus);
  // }

  // const filtreeriAlgavadN = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("N"));
  //   uuendaTooted(vastus);
  // }
  
  // const filtreeriAlgavadT = () => {
  //   const vastus = tootedFailist.filter(toode => toode.startsWith("T"));
  //   uuendaTooted(vastus);
  // }

  const filtreeriAlgav = (taht) => {
    const vastus = tootedFailist.filter(toode => toode.startsWith(taht));
    uuendaTooted(vastus);
  }

  // .sort --> jätab alles sama koguse, aga teises järjekorras, muutmist ei toimu
  // .filter --> jätab alles vähendatud koguse, samas järjekorras, muutmist ei toimu
  // .map --> jätab alles sama kogus, samas järjekorras, aga igaüks muudetud

  // const muudaKoigilNimiSuureksPikk = () => {
  //   const vastus = tootedFailist.map(toode => ({
  //     nimi: toode.nimi.toUpperCase(),
  //     mudel: toode.mudel,
  //     aasta: toode.aasta,
  //     hind: toode.hind,
  //     pilt: toode.pilt,
  //     aktiivne: toode.aktiivne
  // }));
  //   uuendaTooted(vastus);
  // }

  const muudaKoigilNimiSuureks = () => {
    const vastus = tootedFailist.map(toode => ({
      ...toode,
      nimi: toode.nimi.toUpperCase()
  }));
    uuendaTooted(vastus);
  }
 
  return (
    <div>
      <div> {tooted.length} toodet</div>
      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
      {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

      {/* <button onClick={uuenda}>Tühjenda</button> */}
      <br />
      <button onClick={muudaKoigilNimiSuureks}>Muuda kõigil nimi suurteks tähtedeks</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
      <br /><br />

      {/* 
        kui on sulg lõpus --> see tähendab, et pean mingile muutuja selle funktsiooni sees
                            andma väärtust
        siis peab olema ka () => alguses
      */}

      <button onClick={() => filtreeriAlgav("B")}>Filtreeri kellel on esimene täht B</button>
      <button onClick={() => filtreeriAlgav("N")}>Filtreeri kellel on esimene täht N</button>
      <button onClick={() => filtreeriAlgav("T")}>Filtreeri kellel on esimene täht T</button>

      { tooted.map((toode, index) => 
        <div key={toode.nimi}>
          <img className={toode.aktiivne ? "pilt": "pilt-mitteaktiivne"} src={toode.pilt} alt="" />
          {toode.nimi} - {toode.hind} - {toode.aktiivne}
          {toode.aktiivne && <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>}
        </div> )}
    </div>
  )
}

export default Tooted