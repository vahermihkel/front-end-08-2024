// import logo from './logo.svg'; kaks kaldkriipsu --> välja kommenteerimine
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Avaleht from './pages/usestate/Avaleht';
import Kinkekaart from './pages/useref/Kinkekaart';
import Esindused from './pages/arrays/Esindused';
import LisaToode from './pages/useref/LisaToode';
import Ostukorv from './pages/arrays/Ostukorv';
import NotFound from './pages/usestate/NotFound';
// import Menyy from './components/Menyy';
import Seaded from './pages/usestate/Seaded';
import Profiil from './pages/useref/Profiil';
import LogiSisse from './pages/useref/LogiSisse';
import Registreeru from './pages/useref/Registreeru';
import Hinnad from './pages/arrays/Hinnad';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksKasutaja from './pages/yks/YksKasutaja';
import YksToode from './pages/yks/YksToode';
import YksTootaja from './pages/yks/YksTootaja';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaToode from './pages/muuda/MuudaToode';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import Meny from './components/Meny';
import AdminHalda from './pages/halda/AdminHalda';
import Shops from './pages/usestate/Shops';

// kui on võimalus importida mitu asja, siis on {}
// kui on võimalus importida ainult ühte asja, siis on ilma {}

function App() {
  return (
    <div className="App">
      {/* HTMLs välja kommenteerimine: ctrl + ä */}
      
      <Meny />

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
        <Route path='tootajad' element={ <Tootajad /> } />
        <Route path='tooted' element={ <Tooted /> } />

        <Route path='halda-esindused' element={ <HaldaEsindused /> } />
        <Route path='halda-hinnad' element={ <HaldaHinnad /> } />
        <Route path='halda-tootajad' element={ <HaldaTootajad /> } />
        <Route path='halda-tooted' element={ <HaldaTooted /> } />

        <Route path='esindus/:index' element={ <YksEsindus /> } />
        <Route path='hind/:hinnaIndex' element={ <YksHind /> } />
        <Route path='kasutaja/:nimi' element={ <YksKasutaja /> } />
        <Route path='toode/:index' element={ <YksToode /> } />
        <Route path='tootaja/:index' element={ <YksTootaja /> } />

        <Route path='muuda-esindus/:jrknr' element={ <MuudaEsindus /> } />
        <Route path='muuda-hind/:index' element={ <MuudaHind /> } />
        <Route path='muuda-toode/:index' element={ <MuudaToode /> } />
        <Route path='muuda-tootaja/:index' element={ <MuudaTootaja /> } />

        <Route path='admin' element={ <AdminHalda /> } />
        <Route path='shops' element={ <Shops /> } />

        <Route path='*' element={ <NotFound /> } />
      </Routes>

      {/* FOOTER */}

    </div>
  );
}

export default App;

// Ostukorv.js korda
// Kinkekaarti lisada Ostukorvi
// Kokkuarvutus -> 
//      Ostukorvis toodete kogusumma
//      Hindade kogusumma
//      Esinduste nimetuste tähtede kogusumma

// Koju: Töötajate eesnime tähtede kogusumma
// Koju: Toodete hindade kogusumma
// Koju: Toodete nimetuste tähtede kogusumma

// Otsing halda-esinduste ja halda-hindade osas   .filter()
// Koju: Otsing Esindused.js ja Hinnad.js sees
// Koju: Otsing Töötajad.js ja Tooted.js sees
// Koju: Otsing HaldaTootajad.js ja HaldaTooted.js sees

// Praegu oleme 2 otsingut. Hiljem:
// 8 otsingut (6 juurde)

// -------------------
// Tabel "halda"
// Koju tabel

// Dünaamilist kujundust -> kui toode on mitteaktiivne, siis tee pilt must-valgeks
// ja peida ära "lisa ostukorvi" nupp

// 


// null vs undefined

// 05.09   17.30-20.45
// 09.09   18.00-21.15
// 11.09   17.30-20.45
// xxxxxx16.09   17.30-20.45xxxxxxxxxxxx
// 18.09   17.30-20.45
// E 23.09   17.30-20.45 ---> Kodus: Webshop saab kodus lõpetatud
// E 30.09   17.30-20.45 -> LocalStorage + API päringud ---> KOJU: hunnik faile
//                       ->                                  KOJU: Proovitöö
// E 07.10   17.30-20.45 Andmebaas                           KOJU: Lõpuprojekt
// E 21.10   17.30-19.00   ---> lõpuprojekti esitlemine