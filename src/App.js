import "./App.css";
import MapContainer from "./components/MapContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ThreeDContainer from "./components/ThreeDContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h3>MapCube</h3>
        </header>
        <Routes>
          <Route path="/" element={<MapContainer />}/>
          <Route path="/3dContainer" element={<ThreeDContainer />}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
