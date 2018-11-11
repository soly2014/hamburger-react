import React from 'react';
import classNames from './ControlType.module.scss';
import bs from '../../../../assets/global-styles/bootstrap.module.css'
import CN from 'classnames';
console.log(classNames)
const ControlType = (props) =>  (
        <div className={CN(classNames['control-row'])}>
            <div>{props.type}</div>
            <button>Less</button>
            <button>More</button>
        </div>
    )


export default ControlType;