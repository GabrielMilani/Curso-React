import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
