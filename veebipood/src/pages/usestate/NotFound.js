import React, { useState } from 'react'
import Palgakalkulaator from '../../components/Palgakalkulaator'
import Kalkulaator from '../../components/Kalkulaator'
import { useTranslation } from 'react-i18next';

function NotFound() {
  const [kalk, muudaKalk] = useState("palk");
  const { t } = useTranslation();

  return (
    <div>
      <h3>404</h3>
      <h1>{t('page-not-found')}</h1>
      <div>{t("calculate-salary")}</div>
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