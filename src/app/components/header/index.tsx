import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'assets/images/logo.svg'

const Header: React.FC = () => {

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__content'>
          <div className='header__wrapper'>
            <Link to='/'>
              <img className='header__logo' src={Logo} />
            </Link>
          </div>
          <div className='header__title'>
            <h3>Tree Planting Statistics</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
