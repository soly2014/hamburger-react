import React from 'react';
import bs from '../../../assets/global-styles/bootstrap.module.css';
import CN from 'classnames';
const OrderSummery = (props) => {
    return (
        <>
            <div className={CN(bs['modal-dialog'])}>
            <div className={CN(bs['modal-content'])}>
              <div className={CN(bs['modal-header'])}>
                <h5 className={CN(bs['modal-title'])}>Order Details<span></span></h5>
              </div>
              <div className={CN(bs['modal-body'])}>
                <ul className={CN(bs['list-group'])}>
                  {props.Types.map(type=>{
                    return (<li key={type} className={CN(bs['list-group-item'])}>{type} {props.ingredients[type]}</li>)
                  })}
                </ul>
              </div>
              <div className={CN(bs['modal-footer'])}>
                <button type="button" onClick={()=> props.cancelModal()} className={CN(bs['btn'],bs['btn-secondary'])}>Close</button>
                <button type="button" onClick={()=> props.continuePurchasing()} className={CN(bs['btn'],bs['btn-primary'])}>continue purchasing</button>
              </div>
            </div>
          </div>
        </>
    )
}

export default OrderSummery;