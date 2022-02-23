import React from 'react';
import {useState} from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Internship from './pages/internship';
import Diary from './pages/diary';
import Bonus from './pages/bonus';
import Map from './pages/map';
import Account from './pages/account';
import Example from './pages/example';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return (
    <ThemeProvider theme={lightTheme}>
        <>
        <GlobalStyles />
        <Router>
        <Routes>
            <Route exact path='/' exact element={<Login />} />
            <Route path='/home' exact element={<Home />} />
            <Route path='/internship' element={<Internship/>} />
            <Route path='/diary' element={<Diary/>} />
            <Route path='/map' element={<Map/>} />
            <Route path='/bonus' element={<Bonus/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/example' element={<Example/>} />
        </Routes>
        </Router>
        </>
    </ThemeProvider>
);
}
  
export default App;