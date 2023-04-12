import './App.css';
import Signup  from './pages/SignUp/Signup';
import ProfilePage from './pages/profilePage/ProfilePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes >
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/Profile" element={<ProfilePage />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
