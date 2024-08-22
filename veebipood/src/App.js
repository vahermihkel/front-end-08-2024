// import logo from './logo.svg'; kaks kaldkriipsu --> välja kommenteerimine
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Avaleht from './pages/usestate/Avaleht';
import Kinkekaart from './pages/useref/Kinkekaart';
import Esindused from './pages/arrays/Esindused';
import LisaToode from './pages/useref/LisaToode';
import Ostukorv from './pages/arrays/Ostukorv';
import NotFound from './pages/usestate/NotFound';
import Menyy from './components/Menyy';
import Seaded from './pages/usestate/Seaded';
import Profiil from './pages/useref/Profiil';
import LogiSisse from './pages/useref/LogiSisse';
import Registreeru from './pages/useref/Registreeru';
import Hinnad from './pages/arrays/Hinnad';

// kui on võimalus importida mitu asja, siis on {}
// kui on võimalus importida ainult ühte asja, siis on ilma {}

function App() {
  return (
    <div className="App">
      {/* HTMLs välja kommenteerimine: ctrl + ä */}
      
      <Menyy />

{/* localhost:3000/avaleht ---> siis näidatakse teksti "Olen avalehel" */}
      <Routes>
        <Route path='' element={ <Navigate to="avaleht" /> } />
        <Route path='avaleht' element={ <Avaleht /> } />
        <Route path='kinkekaart' element={ <Kinkekaart /> } />
        <Route path='esindused' element={ <Esindused /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='ostukorv' element={ <Ostukorv /> } />
        <Route path='seaded' element={ <Seaded /> } />
        <Route path='profiil' element={ <Profiil /> } />
        <Route path='logi-sisse' element={ <LogiSisse /> } />
        <Route path='registreeru' element={ <Registreeru /> } />
        <Route path='hinnad' element={ <Hinnad /> } />

        <Route path='*' element={ <NotFound /> } />
      </Routes>

      {/* FOOTER */}

    </div>
  );
}

export default App;


// null vs undefined