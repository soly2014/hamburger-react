import React from 'react';
import Classes from './Backdrop.module.scss'
const Backdrop = (props) => {
    return  props.show ? <div
                            onClick={()=> {props.cancelPurchaseModal()} }
                            className={Classes.Backdrop}></div>
                            : null ;
}

export default Backdrop;