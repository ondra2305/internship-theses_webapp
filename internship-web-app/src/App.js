import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Internship from './pages/internship';
import Diary from './pages/diary';
import Bonus from './pages/bonus';
import Map from './pages/map';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Login />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/internship' element={<Internship/>} />
        <Route path='/diary' element={<Diary/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/bonus' element={<Bonus/>} />
    </Routes>
    </Router>
);
}
  
export default App;