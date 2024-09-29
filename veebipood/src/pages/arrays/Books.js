import React, { useState } from 'react'

function Books() {
  const raamatudMuutujast = ["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Tõde ja õigus", "Nipernaadi"];
  
  const [raamatud, muudaRaamatud] = useState(raamatudMuutujast.slice());

  const reset = () => {
    muudaRaamatud(raamatudMuutujast.slice());
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      {raamatud}
    </div>
  )
}

export default Books