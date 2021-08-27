import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import MapContainer from "./components/MapContainer";
import MapModel from "./components/mapmodel";
//Css
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h3>MapCube</h3>
        </header>
        <Routes>
          <Route path="/" element={<MapContainer />} />
          <Route path="/3dContainer/:lat/:lng/:zoom" element={<MapModel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
