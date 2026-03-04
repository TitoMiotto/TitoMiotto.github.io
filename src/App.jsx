import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import MalditoClub from "./pages/malditoClub.jsx";
import Home from "./pages/Home.jsx";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/malditoClub" element={<MalditoClub />} />
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