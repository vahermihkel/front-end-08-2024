//import logo from './logo.svg'; kaks kaldkriipsu on välja kommenteerimine
import './App.css';
import {useRef, useState} from "react";

// sonum - sõna, mis hakkab muutuma EHK "muutuja"
// muudaSonum - sõna, mille välja kutsudes saab "muutujat" muuta EHK "funktsioon"
// useState sulgude sees kirjutame "muutuja" esialgse väärtuse

function App() {
  const [sonum, muudaSonum] = useState("Logi sisse!");
  const [isik, muudaIsik] = useState("");
  const [number, muudaNumber] = useState(7);
  const isikRef = useRef();
  const numberRef = useRef();

  function sisesta() {
    if (isikRef.current.value === "") {
      muudaSonum("Tühja nime ei saa sisestada!");
      return; // ära enam siit edasi mine
    }
    if (isikRef.current.value.includes("%")) {
      muudaSonum("Nimes ei tohi olla protsent!");
      return; // ära enam siit edasi mine
    }
    if (isikRef.current.value.startsWith(".")) {
      muudaSonum("Nimi ei ole alata punktiga!");
      return; // ära enam siit edasi mine
    }
    muudaSonum("Sisselogitud!");
    muudaIsik(isikRef.current.value);
  }

  function sisestaNumber() {
    muudaNumber(numberRef.current.value);
  }

  return (
    <div className="App">
      {sonum}
      {sonum === "Logi sisse!" && <button onClick={() => muudaSonum("Sisselogitud!")}>Logi sisse</button>}
      {sonum === "Sisselogitud!" && <button onClick={() => muudaSonum("Logi sisse!")}>Logi välja</button>}

      <br />
      {isik}
      <button onClick={() => muudaIsik("Pille")}>Pille</button>
      <button onClick={() => muudaIsik("Sille")}>Sille</button>
      <button onClick={() => muudaIsik("Malle")}>Malle</button>
      <input ref={isikRef} type="text" />
      <button onClick={sisesta}>OK</button>
      <br />
      {number}
      <button onClick={() => muudaNumber(number - 1)}>-</button>
      <button onClick={() => muudaNumber(number + 1)}>+</button>
      {number > 0 && <button onClick={() => muudaNumber(0)}>Tagasi nulli</button>}
      <input ref={numberRef} type="text" />
      <button onClick={sisestaNumber}>Sisesta</button>
    </div>
  );
}

export default App;
