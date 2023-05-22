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
          <Router>
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/recipes" element={<Recipe />} />
          </Routes>
        </Router>
        </div>
       
      </div>
    </div>
  );
}

export default App;
