//css
import './App.css'

//hooks
import { useAuth } from './hooks/useAuth';

//
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import EditProfile from './pages/EditProfile/EditProfile';
import Profile from './pages/Profile/Profile';
import Photo from './pages/Photo/Photo';


function App() {

  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
            <Route path="/profile" element={auth ? <EditProfile /> : <Navigate to="/login" />} />
            <Route path="/users/:id" element={auth ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/login" element={!auth ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!auth ? <Register /> : <Navigate to="/" />} />
            <Route path="/photos/:id" element={<Photo />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
