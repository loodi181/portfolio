import { BrowserRouter as Router,Route, Routes} from "react-router-dom";


import './App.css';
import Home from './Pages/home/homeScreen';
import Navbar from "./Pages/home/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
        </div>
      </Router>
     
      
    </div>
  );
}

export default App;
