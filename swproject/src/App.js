// App.js

import React from 'react';
import './App.css';
import Signup from './pages/SignUp/Signup';
import Recipe from './pages/Recipes/Recipe';
import ProfilePage from './pages/profilePage/ProfilePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbarx from "./Components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <div className="spectrum-background">
        <div className="row">
          <Navbarx />
        </div>
        <Router>
          <Routes>
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Profile" element={<ProfilePage />} />
            <Route exact path="/Recipe" element={<Recipe />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
