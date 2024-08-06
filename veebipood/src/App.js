// import logo from './logo.svg'; kaks kaldkriipsu --> välja kommenteerimine
import './App.css';
import { Link, Route, Routes } from "react-router-dom";

// kui on võimalus importida mitu asja, siis on {}
// kui on võimalus importida ainult ühte asja, siis on ilma {}

function App() {
  return (
    <div className="App">
      {/* HTMLs välja kommenteerimine: ctrl + ä */}
      
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

{/* localhost:3000/avaleht ---> siis näidatakse teksti "Olen avalehel" */}
      <Routes>
        <Route path='avaleht' element={ <div>Olen avalehel</div> } />
        <Route path='kinkekaart' element={ <div>Olen k</div> } />
        <Route path='esindused' element={ <div>Olen esinduste lehel</div> } />
        <Route path='lisa-toode' element={ <div>Olen lisa toote</div> } />
        <Route path='ostukorv' element={ <div>Olen ostukorvi lehel</div> } />
      </Routes>

      FOOTER

    </div>
  );
}

export default App;
