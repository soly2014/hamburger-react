import React from 'react';
import Classes from './NavigationItem.module.scss';
import {NavLink} from 'react-router-dom'

const NavigationItem = (props) => {
  console.log(Classes.active);
  return (
      <li className={[Classes.item].join(' ')}>
      <NavLink className={[Classes.NavItem].join(' ')} exact={props.exact} to={props.url} activeClassName={Classes.active}>{props.children}</NavLink></li>
  )
}

export default NavigationItem;