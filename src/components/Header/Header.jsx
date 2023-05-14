import React from 'react'
import './Header.scss'
import logoo from '../../images/logoo.png'
import avatar from '../../images/avatar.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-area'>
        <div className='logo-image'>
          <Link to='/'>
          <img src={logoo} alt='logo'></img>
          </Link>
        </div>
      </div>
      <div className='web-title'>Watch N' Chill</div>
      <div className='account-area'>
        <img src={avatar} alt='avatar'></img>
        <div className='my-account'>
          <div>Login</div>
          <div>Register</div>
      </div>
      </div>
    </div>
  )
}

export default Header