import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/Login"
import Self from "./components/Self"


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path="/" element={<Login />}/>

          <Route path="/self" element={<Self />}/>

        </Routes>
      </Router>


    </div>
  );
}

export default App;
