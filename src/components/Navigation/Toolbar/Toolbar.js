import React from 'react';
import Classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = (props) => (
  <header className={Classes['Header-container']}>
    <div className={Classes.Header}>
      <Logo />
      <div onClick={()=>props.onClickBurgerMenu()} className={[Classes.MobileOnly,Classes.BurgerMenu].join(' ')}></div>
      <nav className={Classes.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth}/>
      </nav>
    </div>
  </header>
)

export default Toolbar;