import React from 'react'
import { Link } from "react-router-dom";

function Menyy() {
  return (
    <div>
       <Link to="avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="kinkekaart">
        <button className="nupp">Osta kinkekaart</button>
      </Link>

      <Link to="esindused">
        <button className="nupp">Vaata meie esindusi</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa uus toode</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="seaded">
        <button className="nupp">Seaded</button>
      </Link>
    </div>
  )
}

export default Menyy