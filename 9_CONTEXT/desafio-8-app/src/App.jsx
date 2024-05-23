import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <h1>Context React</h1>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}>Home</Route>
          <Route path="/products" element={<Product></Product>}>Product</Route>
          <Route path="/about" element={<About></About>}>About</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
