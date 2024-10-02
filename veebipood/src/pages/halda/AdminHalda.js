import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function AdminHalda() {
  return (
    <div>

      <Button as={Link} to="/halda-esindused" variant="primary">Halda esindused</Button>{' '}
      <Button as={Link} to="/halda-hinnad" variant="secondary">Halda hinnad</Button>{' '}
      <Button as={Link} to="/lisa-toode" variant="success">Lisa uus toode</Button>{' '}
      <Button as={Link} to="/halda-tootajad" variant="warning">Halda töötajad</Button>{' '}
      <Button as={Link} to="/halda-tooted" variant="info">Halda tooted</Button>{' '}
      <Button as={Link} to="/tarnija">Tarnija</Button>{' '}

      
      {/* <Link to="lisa-toode">
        <button className="nupp">Lisa uus toode</button>
      </Link>

      <Link to="halda-esindused">
        <button className="nupp">Halda esindused</button>
      </Link>

      <Link to="halda-hinnad">
        <button className="nupp">Halda hinnad</button>
      </Link>

      <Link to="halda-tootajad">
        <button className="nupp">Halda töötajad</button>
      </Link>

      <Link to="halda-tooted">
        <button className="nupp">Halda tooted</button>
      </Link> */}

    </div>
  )
}

export default AdminHalda