import React, { useEffect, useState } from 'react'

function Tarnija() {
  const [tooted, muudaTooted] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // kust aadressilt
      .then(response => response.json())  // mis kujul need andmed on (.json kujul)
      .then(json => muudaTooted(json))   //   mida me nende andmetega peale hakkame
  }, []);

  if (tooted.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {tooted.map(toode =>
        <div>
          <img style={{"width": "50px"}} src={toode.image} alt="" />
          <div>{toode.id}</div>
          <div>{toode.title}</div>
          <div>{toode.price}</div>
          <div>{toode.description}</div>
          <div>{toode.category}</div>
          <div>{toode.image}</div>
          <div>{toode.rating.rate}</div>
          <div>{toode.rating.count}</div>
        </div>
      )}
    </div>
  )
}

export default Tarnija