import React from 'react';
import bs from '../../../assets/global-styles/bootstrap.module.css';
import classes from './Button.module.scss';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button,bs['btn'], bs[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;