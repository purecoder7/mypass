import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Navbar from './components/Navbar';
import SavedPasswords from './screens/SavedPasswords';
import { Routes, Route, Link } from "react-router-dom";
import Home from './screens/Home';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/savedpasswords" element={<SavedPasswords/>} />
      </Routes> 
    </>
  )
}

export default App
