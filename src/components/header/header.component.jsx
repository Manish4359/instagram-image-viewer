import React from 'react'
import './header.styles.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Header({ path }) {

  const [viewProfileOptions, setViewProfileOptions] = useState(false);
  const [searchText, setSearchText] = useState('')

  const navigate = useNavigate();

  return (
    <div className='header'>
      <h1 className='header-logo'>Image viewer</h1>
      {path === '/home' ? <div className='search-box'><SearchIcon style={{ padding: '5px', color: 'black' }} /><input type="text" placeholder='search' /></div> : <></>}
      {path === '/home' || path==='/profile' ? <div className='user-profile' onClick={() => setViewProfileOptions(prevState => !prevState)}>
        {viewProfileOptions ? <ul className='user-profile-options'>
          <li onClick={() => navigate('/profile', {
            replace: true
          })}>My Account</li>
          <li onClick={() => navigate('/', {
            replace: true
          })}>Logout</li>
        </ul> : <></>}
      </div> : <></>}
    </div>
  )
}

export default Header 