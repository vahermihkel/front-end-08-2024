import React, { useState } from 'react'
import Palgakalkulaator from '../../components/Palgakalkulaator'
import Kalkulaator from '../../components/Kalkulaator'

function NotFound() {
  const [kalk, muudaKalk] = useState("palk");

  return (
    <div>
      <h3>404</h3>
      <h4>Page not found</h4>
      <div>Senimaani kuni õigele lehele lähed, arvuta oma palk:</div>
      {kalk === "palk" &&         <div>
                                    <button onClick={() => muudaKalk("kalkulaator")}>Näita hoopis tavalist kalkulaatorit</button>
                                    <Palgakalkulaator />
                                  </div> }
      {kalk === "kalkulaator" &&  <div>
                                    <button onClick={() => muudaKalk("palk")}>Näita jälle palgakalkulaatorit</button> 
                                    <Kalkulaator />
                                  </div>}
    </div>
  )
}

export default NotFound