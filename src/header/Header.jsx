import React from 'react'
import logo from '../assets/Логотип.svg'
import './Header.css'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'

export const Header = () => {
  return (
    <header>
        <div className="logo"><img src={logo} alt="Logo" /></div>
        <Menu />
        <div className="searchAndEntry">
            
                <button className='search'><svg width="55" height="52" viewBox="0 0 55 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="54" height="51" rx="9.5" fill="white" stroke="white"/>
<path d="M30.1087 29.1087L35 34M31.7391 24.8696C31.7391 28.1112 29.1112 30.7391 25.8696 30.7391C22.6279 30.7391 20 28.1112 20 24.8696C20 21.6279 22.6279 19 25.8696 19C29.1112 19 31.7391 21.6279 31.7391 24.8696Z" stroke="#3657CB" strokeWidth="1.5" strokeLinecap="round"/>
</svg> </button>
            
            
                <button className='entry'>
                  <Link to='/login'>
                    Войти
                  </Link>

                </button>
            
        </div>
    </header>
  )
}
