import React from 'react';
import Classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = () => (
  <header className={Classes['Header-container']}>
    <div className={Classes.Header}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </header>
)

export default Toolbar;