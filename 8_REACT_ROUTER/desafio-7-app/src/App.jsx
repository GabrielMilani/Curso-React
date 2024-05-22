import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Information from './pages/Information';
import NotFount from './pages/NotFount';
import SearshForm from './components/SearchForm';
import Search from './pages/Search';


function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar></Navbar>
        <SearshForm></SearshForm>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products/:id" element={<Product></Product>}></Route>
          <Route path="/products/:id/info" element={<Information></Information>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="*" element={<NotFount></NotFount>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
