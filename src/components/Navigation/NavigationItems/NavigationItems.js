import React from 'react';
import Classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux'

const NavigationItems = (props) => {
  let authComponent;
  if (window.location.href.includes('login')) {
    authComponent = <NavigationItem url='/login'>Log In</NavigationItem>
  } else {
    authComponent = <NavigationItem url='/sign-up'>Sign Up</NavigationItem>
  }
  if (props.isAuth) {
    authComponent = <>
                      <NavigationItem url='/orders'>Orders</NavigationItem>
                      <NavigationItem url='/logout'>Log Out</NavigationItem>
                    </>;
  }
return (
    <ul className={Classes.NavigationItems}>
        <NavigationItem url='/' exact={true}>Burger Builder</NavigationItem>
        {authComponent}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(NavigationItems)

