import React, {useState} from 'react'
import tootedFailist from "../../data/tooted.json"
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

function HaldaTooted() {

  const [tooted, uuendaTooted] = useState (tootedFailist.slice());
//  const toodeRef = useRef();

const kustuta = (index) => {
    tootedFailist.splice(index,1);
    uuendaTooted(tootedFailist.slice());
}

return (
  <div>
      <div> {tooted.length} toodet</div>

      {tooted.length > 0 && <button onClick={() => uuendaTooted([])}>Tühjenda</button>}
            {tooted.length === 0 && <div>Ühtegi toodet pole!</div>}

            
            {tooted.map((toode, index) => 
              <div key={index}>
              {index}. {toode.nimi} - {toode.hind} - {toode.pilt} - {toode.aktiivne}
              <b>{toode.keskus}</b>
                <button onClick={() => kustuta(index)}>x</button>       
                <Link to={"/muuda-toode/" + index}>
                  <button>Muuda</button> 
                </Link>
              </div>)}
          </div>
        )
      }

export default HaldaTooted