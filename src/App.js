import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/login/login.component';
import Header from './components/header/header.component';
import Home from './components/home/home.component';
import UserProfile from './components/profile/profile.component';
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>
  
          <Route path='/' element={<><Header path={'/'}/><Login /></>} />
          <Route  path='/home' element={<><Header path={'/home'}/><Home /></>} />
          <Route  path='/profile' element={<><Header path={'/profile'}/><UserProfile /></>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
