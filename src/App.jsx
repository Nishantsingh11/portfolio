import './App.css';
import Profile from './Profile';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Showproject from './Showproject';
import Info from './Info';
import Contact from './Contact';

function App() {
  return (
      <div className=''>
    <div className='bg-[url("./img/back.png")] '>

        <BrowserRouter>
          <Routes>
            <Route path = "/project" element = {<Showproject />} />
            <Route path = "/" element = {<Profile />} />
            <Route path = "/info" element = {<Info />} />
            <Route path = "/contact" element = {<Contact />} />
          </Routes>
          
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
