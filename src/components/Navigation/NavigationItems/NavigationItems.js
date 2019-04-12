import React from 'react';
import Classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
  let authComponent;
  if (window.location.href.includes('login')) {
    authComponent = <NavigationItem url='/login'>Log In</NavigationItem>
  } else {
    authComponent = <NavigationItem url='/sign-up'>Sign Up</NavigationItem>
  }
  if (props.isAuthenticated) {
    authComponent = <NavigationItem url='/logout'>Log Out</NavigationItem>
  }
return (
    <ul className={Classes.NavigationItems}>
        <NavigationItem url='/' exact={true}>Burger Builder</NavigationItem>
        <NavigationItem url='/orders'>Orders</NavigationItem>
        {authComponent}
    </ul>
  )
}
export default NavigationItems;