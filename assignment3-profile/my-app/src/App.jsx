import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Interest from './pages/Interest';
import Awards from './pages/Awards';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skill from './pages/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Routes>
          <Route path="/" element={<About/>}>
            <Route path='experience' element={<Experience/>} />
            <Route path='education' element={<Education/>} />
            <Route path='skills' element={<Skill/>} />
            <Route path='interest' element={<Interest/>} />
            <Route path='awards' element={<Awards/>}/>
          </Route>
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
