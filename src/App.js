import './App.css';
import React, {Suspense, lazy} from 'react'
//import Body from './components/body/Body';
// import Header from './components/header/Header.js';
// import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Header =lazy(()=> import ('./components/header/Header'))
const Login =lazy(()=> import ('./components/login/Login.js'))
const Body =lazy(()=> import ('./components/body/Body.js'))
function App() {
  return (
    <Router>
    <div className="app">
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/" exact={true} element={<Login />} />
    </Routes>
    <Routes>
    <Route path="/home"  element={<><Header /><Body /></>} />
    </Routes>
    </Suspense>
    </div>
    </Router>
  );
}

export default App;
