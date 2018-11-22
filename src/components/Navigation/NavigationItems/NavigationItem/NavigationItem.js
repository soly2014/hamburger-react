import React from 'react';
import Classess from './NavigationItem.module.scss';

const NavigationItem = (props) => {
    const active = { backgroundColor:'#8F5C2C',
                    color:'#ffffff',
                    borderBottom:'4px solid #40A4C8'
    }
 return (
    <li className={Classess.item} style={ props.active ? active : null}>
    <a href='#'>{props.children}</a></li>
  )
}

export default NavigationItem;