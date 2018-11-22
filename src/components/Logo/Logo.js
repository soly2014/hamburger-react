import React from 'react';
import Classess from './Logo.module.scss';
import LogoURL from '../../assets/images/burger-logo.png'

const Logo = () => (
  <div className={Classess.Logo}>
      <img src={LogoURL}></img>
  </div>
)

export default Logo;