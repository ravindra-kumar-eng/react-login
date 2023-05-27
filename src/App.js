
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Profile from './components/Profile';



function App() {
  
  return (
   <Router>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={<Signup/>} />
        <Route exact path='profile' element={<Profile/>} />
      </Routes>
      
    </Router>

  );
}

export default App;
