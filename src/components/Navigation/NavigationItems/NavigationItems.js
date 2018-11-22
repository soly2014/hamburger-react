import React from 'react';
import Classess from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
  <ul className={Classess.NavigationItems}>
      <NavigationItem active={true}>Burger Builder</NavigationItem>
      <NavigationItem>Checkout</NavigationItem>
  </ul>
)

export default NavigationItems;