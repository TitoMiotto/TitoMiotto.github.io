import { lazy, Suspense } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import SelecPv from "./pages/Restaurante/SelectPv.jsx";
import Home from "./pages/Home.jsx";


const MalditoClubDemo = lazy(() => import('../srcMC/App.jsx'));

function App() { 
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/maldito-club/*" element={<Suspense fallback={<p className="p-8">Cargando demo…</p>}><MalditoClubDemo /></Suspense>} />
          <Route path="/pv" element={<SelecPv />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
const MalditoClubDemo = lazy(() => import('../srcMC/App.jsx'));

function App() {
  return <Home />;
}
*/