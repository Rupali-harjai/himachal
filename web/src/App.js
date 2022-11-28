
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/pages/Home';
import Destinations from './componets/pages/Destinations';
import Services from './componets/pages/Services';
import SignUp from './componets/pages/SignUp';
function App() {
  return (
  <>
  <Router>
  <Navbar/>
  <Routes>
    <Route path='/' exact element={<Home />}/>
    <Route path='/destinations' exact element={<Destinations />}/>
    <Route path='/services' exact element={<Services />}/>
    <Route path='/sign-up' exact element={<SignUp />}/>
  </Routes>
  </Router>
    
      </>
  );
}

export default App;
