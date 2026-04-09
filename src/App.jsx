import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import SelecPv from "./pages/Restaurante/SelectPv.jsx";
import Home from "./pages/Home.jsx";


function App() { 
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/pv" element={<SelecPv />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
function App() {
  return <Home />;
}
*/