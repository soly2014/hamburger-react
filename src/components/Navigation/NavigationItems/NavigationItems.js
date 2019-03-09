import React from 'react';
import Classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
  <ul className={Classes.NavigationItems}>
      <NavigationItem url='/' exact={true}>Burger Builder</NavigationItem>
      <NavigationItem url='/orders'>Orders</NavigationItem>
  </ul>
)

export default NavigationItems;