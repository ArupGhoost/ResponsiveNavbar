import React, { useState } from 'react'
import './Hamburger.scss';
import MenuIcon from '@material-ui/icons/Menu';

const Hamburger = () => {

const[showLinks, setShowLinks] = useState(false);
    return (
        <>
          <div className='Navbar'>
              <div className='leftside'>
                <div className='links' id={showLinks ? 'hidden' : ''}>
                <a href='/home'>Home</a>
                <a href='/products'>Products</a>
                <a href='/about'>About</a>
                <a href='/join'>Join</a>
                </div>
                <button onClick={() => {
                    return setShowLinks(!showLinks)
                }}><MenuIcon /></button>
              </div>
              <div className='rightside'>
                  <input type='search' placeholder='Search...'/>
                  <button>Search</button>
              </div>
          </div>
          <div className='bar1'></div>
        </>
    )
}

export default Hamburger
