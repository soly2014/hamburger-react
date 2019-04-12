import React from 'react';
import Classes from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
const sideDrawer = (props) => {
  let attachedClasses = Classes.Close;
  if (props.open) {
    attachedClasses = Classes.Open;
  }
  return (
    <>
      <div className={[Classes.SideDrawer,attachedClasses].join(' ')}>
        <NavigationItems />
      </div>
      <Backdrop show={props.open} cancelModal={props.onClickBurgerMenu}/>
    </>
  )
}

export default sideDrawer;