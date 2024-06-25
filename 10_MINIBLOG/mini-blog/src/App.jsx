//css
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

//context
import { AuthProvider } from './context/AuthContext';

//hooks
import { useEffect, useState } from 'react';
import useAuthentication from './hooks/useAuthentication';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';


function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);


  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home></Home>} >Home</Route>
              <Route path="/about" element={<About></About>} >About</Route>
              <Route path="/search" element={<Search></Search>} >Search</Route>
              <Route path="/posts/:id" element={<Post></Post>} >Post</Route>
              <Route path="/posts/create" element={user ? <CreatePost></CreatePost> : <Navigate to="/login"></Navigate>} >CreatePost</Route>
              <Route path="/posts/edit/:id" element={user ? <EditPost></EditPost> : <Navigate to="/login"></Navigate>} >EditPost</Route>
              <Route path="/login" element={!user ? <Login></Login> : <Navigate to="/"></Navigate>} >Login</Route>
              <Route path="/register" element={!user ? <Register></Register> : <Navigate to="/"></Navigate>} >Register</Route>
              <Route path="/dashboard" element={user ? <Dashboard></Dashboard> : <Navigate to="/login"></Navigate>} >Dashboard</Route>
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
