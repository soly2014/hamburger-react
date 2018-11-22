import React from 'react';
import classNames from './ControlType.module.scss';
import bs from '../../../../assets/global-styles/bootstrap.module.css'
import CN from 'classnames';
const ControlType = (props) =>  (
        <div className={CN(classNames['control-row'])}>
            <div className={CN(classNames['control-name'])}>{props.type}</div>
            <button
                onClick={() => props.removeIngredient(props.type)}
                disabled= { props.ingredients[props.type] < 1}
            >Less
            </button>
            <button
                className={CN(bs['btn'],bs['btn-success'])}
                onClick={() => props.addIngredient(props.type)}>
            More</button>
        </div>
    )

export default ControlType;