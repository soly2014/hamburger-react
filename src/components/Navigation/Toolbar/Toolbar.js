import React from 'react';
import Classess from './Toolbar.module.scss';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = () => (
  <header className={Classess['Header-container']}>
    <div className={Classess.Header}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </header>
)

export default Toolbar;