import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home from './pages/Home'
import Logs from './pages/Logs'
import Signup from './pages/Signup';
import Login from './pages/Login'
import Navbar from './components/Navbar';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App flex flex-col h-screen">
      <BrowserRouter>
      <Navbar />
        <div className="pages flex flex-grow content-start justify-start overflow-hidden m-4">
          <Routes>
            <Route 
              path="/"
              element={ user ? <Home /> : <Navigate to="/login" />}
            />
            <Route 
              path="/logs"
              element={ user ? <Logs /> : <Navigate to="/login" />}
            />
            <Route 
              path="/signup"
              element={ user ? <Navigate to="/" /> : <Signup /> }
            />
            <Route 
              path="/login"
              element={ user ? <Navigate to="/" /> : <Login /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
