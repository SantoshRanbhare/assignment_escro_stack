import React, { useContext } from 'react'
import Logo from './Logo'
import '../css/Navbar.css';
import { LoginContext } from '../App';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(LoginContext);
  function handleLogOutClick(){
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <nav>
      <div className='nav-head'>
        <Logo className="nav-main-logo"/>
      <div className='nav-links'>
                  <NavLink to='#'><svg xmlns="http://www.w3.org/2000/svg" className='nav-head-logo' viewBox="0 0 24 24" fill="currentColor"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg>
            Loads</NavLink>
                  <NavLink to='#'><svg xmlns="http://www.w3.org/2000/svg" className='nav-head-logo' viewBox="0 0 24 24" fill="currentColor"><path d="M20.0049 2C21.1068 2 22 2.89821 22 3.9908V20.0092C22 21.1087 21.1074 22 20.0049 22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H20.0049ZM8 4H6V20H8V4ZM20 4H10V20H20V4Z"></path></svg>
            Statements</NavLink>
                  <NavLink to='#'><svg xmlns="http://www.w3.org/2000/svg" className='nav-head-logo' viewBox="0 0 24 24" fill="currentColor"><path d="M11.9498 7.94975L10.5356 9.36396L8.00079 6.828L8.00004 20H6.00004L6.00079 6.828L3.46451 9.36396L2.05029 7.94975L7.00004 3L11.9498 7.94975ZM21.9498 16.0503L17 21L12.0503 16.0503L13.4645 14.636L16.0008 17.172L16 4H18L18.0008 17.172L20.5356 14.636L21.9498 16.0503Z"></path></svg>Transactions</NavLink>
      </div>
      </div>


      <div className='nav-main-logout'>
        <div className='nav-logout'>
                  <a href='#' onClick={handleLogOutClick}><svg xmlns="http://www.w3.org/2000/svg" className='nav-logout-logo' viewBox="0 0 24 24" fill="currentColor"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg> Logout</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
