import React, { useState } from 'react'
import keskusedFailist from "../../data/keskused.json"
import { Link } from 'react-router-dom';
// ../ <--- kausta võrra üles
// ../ "arrays" kaustast ülespoole (olen pages sees)
// ../../ "arrays" ja "pages" kaustast ülespoole (olen src sees)


// muutuja - JS sõna, mis sisaldab enda sees väärtust, mida võib koodis iga hetk asendada
// muutja - JS sõna, mis on funktsioon ja mis muudab muutujat
// algväärtus - refreshi või esialgselt lehele tuleku väärtus

function Esindused() {
  //    muutuja, muutja   =         algväärtus
  const [linn, muudaLinn] = useState("Tallinn");
  const [keskused, muudaKeskused] = useState(keskusedFailist.slice());

  const reset = () => {
    muudaKeskused(keskusedFailist.slice());
  }

  // localeCompare --> kui on vaja sõnu sorteerida
  // lahutustehe --> kui on vaja numbreid sorteerida
  // Objekte sorteerida ei saa

  const sorteeriAZ = () => {
    // keskused.sort();
    keskused.sort((a,b) => a.nimi.localeCompare(b.nimi, "et"));
    muudaKeskused(keskused.slice()); // array puhul HTMLi uuendamine
  }

  const sorteeriZA = () => {
    // keskused.sort();
    // keskused.reverse();
    keskused.sort((a,b) => b.nimi.localeCompare(a.nimi, "et"));
    muudaKeskused(keskused.slice());
  }

  const sorteeriTahedKasvavalt = () => {
    keskused.sort((a,b) => a.nimi.length - b.nimi.length);
    muudaKeskused(keskused.slice());
  }

  const sorteeriTahedKahanevalt = () => {
    keskused.sort((a,b) => b.nimi.length - a.nimi.length);
    muudaKeskused(keskused.slice());
  }

  const sorteeriKolmasTahtAZ = () => {
    keskused.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2], "et"));
    muudaKeskused(keskused.slice());
  }

  const filtreeriTahemarkeRohkemKui7 = () => {
    const vastus = keskusedFailist.filter(keskus => keskus.nimi.length >= 7);
    muudaKeskused(vastus);
  }

  const filtreeriTahemarkeTapselt9 = () => {
    const vastus = keskusedFailist.filter(keskus => keskus.nimi.length === 9 && keskus.tel.startsWith("4"));
    muudaKeskused(vastus);
  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = keskusedFailist.filter(keskus => keskus.nimi.includes("is"));
    muudaKeskused(vastus);
  }

  const filtreeriKellelViimaneTahtE = () => {
    const vastus = keskusedFailist.filter(keskus => keskus.nimi.endsWith("e"));
    muudaKeskused(vastus);
  }

  const filtreeriKellelOnKolmasTahtI = () => {
    const vastus = keskusedFailist.filter(keskus => keskus.nimi[2] === "i");
    muudaKeskused(vastus);
  }

  const arvutaEsinduseTahedKokku = () => {
    let summa = 0;
    keskused.forEach(keskus => summa = summa + keskus.nimi.length);
    return summa;
  }

  const arvutaEsinduseTelefonidKokku = () => {
    let summa = 0;
    keskused.forEach(keskus => summa = summa + Number(keskus.tel));
    return summa;
  }

  return (
    <div>
      <div>Hetkel on aktiivne linn: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" &&
      <div>
        <button onClick={reset}>Reset</button>

        <br /><br />

        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
        
        <br /><br />
        
        <button onClick={filtreeriTahemarkeRohkemKui7}>Filtreeri kellel tähemärke vähemalt 7</button>
        <button onClick={filtreeriTahemarkeTapselt9}>Filtreeri kellel tähemärke täpselt 9</button>
        <button onClick={filtreeriKesSisaldabIsLyhendit}>Filtreeri kes sisaldab "is" lühendit</button>
        <button onClick={filtreeriKellelViimaneTahtE}>Filtreeri kellel on viimane täht "e"</button>
        <button onClick={filtreeriKellelOnKolmasTahtI}>Filtreeri kellel on kolmas täht "i"</button>

        {/* <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div> */}
        {keskused.map((keskus, index) => 
          <div key={keskus.nimi}>
            {keskus.nimi} - {keskus.tel}
            <Link to={"/esindus/" + index}>
              <button>Vt lähemalt</button> 
            </Link>
          </div>)}
      </div>}

      {linn === "Tartu" &&
      <div>
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </div>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}

      <div>Tähed kokku: {arvutaEsinduseTahedKokku()} tk</div>
      <div>Telefonid kokku: {arvutaEsinduseTelefonidKokku()} </div>


    </div>
  )
}

export default Esindused