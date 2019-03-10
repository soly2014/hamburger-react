import React from 'react';
import Classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <>
          <div className={Classes.Modal} style={{
              transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: props.show ? '1' : '0'
            }}>
          {props.children}
          </div>
          <Backdrop show={props.show} cancelPurchaseModal={props.cancelPurchaseModal}/>
        </>
    )
}

export default Modal;