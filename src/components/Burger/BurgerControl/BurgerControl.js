import React from 'react';
import classNames from './BurgerControl.module.scss';
import ControlType from './ControlType/ControlType';
import bs from '../../../assets/global-styles/bootstrap.module.css'
import CN from 'classnames';

const BurgerControl = () => (
    <div className={CN(classNames.wrapper,bs['text-center'])}>
        <div>Current Price : 50.99 $ </div>
        <ControlType type='meat' />
        <ControlType type='salad' />
        <ControlType type='bacon' />
        <ControlType type='cheese' />
        
    </div>
)

export default BurgerControl;