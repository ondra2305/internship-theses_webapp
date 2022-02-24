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
import TeacherHome from './pages/teacherHome';
import TeacherInternship from './pages/teacherInternship';
import TeacherAccount from './pages/teacherAccount';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useDarkMode } from "./useDarkMode";
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import {StyledFooter} from './components/styles/Footer.styled';

import Toggle from './components/Toggle';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

    return (
        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyles />
            <Router>
              <Header>
                <Container/>
              </Header>
            <Routes>
                <Route exact path='/' exact element={<Login />} />
                <Route path='/home' exact element={<Home />} />
                <Route path='/internship' element={<Internship/>} />
                <Route path='/diary' element={<Diary/>} />
                <Route path='/map' element={<Map/>} />
                <Route path='/bonus' element={<Bonus/>} />
                <Route path='/account' element={<Account/>} />
                <Route path='/example' element={<Example/>} />
                <Route path='/teacherHome' exact element={<TeacherHome />} />
                <Route path='/teacherInternship' element={<TeacherInternship/>} />
                <Route path='/teacherAccount' element={<TeacherAccount/>} />
            </Routes>
              <StyledFooter>
                <p>Made by Ondřej Svoboda</p>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
              </StyledFooter>
            </Router>
            </>
        </ThemeProvider>
    );
    }
  
export default App;