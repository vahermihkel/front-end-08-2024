import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import kasutajadFailist from "../../data/kasutajad.json";

function LogiSisse() {
  const kasutajanimiRef = useRef();
  const paroolRef = useRef();

  const login = () => {
    // if (kasutajanimiRef.current.value.length < 5) {
    //   toast.error("Kasutajanimi on liiga lühike");
    //   return;
    // }

    //  kui leiab on vastus muutuja sees:  "admin"   VÕI     "aadu1"
    //  kui ei leia, siis on muutuja sees:   undefined
    const vastus = kasutajadFailist.find(kasutaja => kasutaja === kasutajanimiRef.current.value);
    if (vastus === undefined) {
      toast.error("Selline kasutaja puudub");
      return;
    }

    if (paroolRef.current.value !== "midagi") {
      toast.error("Parool on vale");
      return;
    }

    toast.success("Sisselogitud!");
  }

  return (
    <div>
      <label>Kasutajanimi</label> <br />
      <input ref={kasutajanimiRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={paroolRef} type="password" /> <br />
      <button onClick={login}>Logi sisse</button>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        />
    </div>
  )
}

export default LogiSisse