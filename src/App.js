import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

//  Navigation Imports
import Navigation from './components/NavBar.js';
import {
  BrowserRouter,
  Routes, Route, useNavigate
} from 'react-router-dom';

// Hook Imports

// Component Imports
import Home from './components/Home';
import Login from './components/login/Login';
import ScheduleList from './components/schedule/ScheduleList';
import PrintableVersion from './components/schedule/PrintableVersion';
import Contact from './components/Contact';

function App() {

  const GoToPrintableVersion = () => {
    useNavigate('/printableVersion')
  };

  return (
    <div className="App">
      <Navigation />

      <BrowserRouter>
        <Routes>
          <Route index exact path='/' element={<Home />} />
          <Route path='/scheduleList' element={<ScheduleList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/printableVersion' element={<PrintableVersion />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
