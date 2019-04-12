import React from 'react';
import classNames from './BurgerControl.module.scss';
import ControlType from './ControlType/ControlType';
import bs from '../../../assets/global-styles/bootstrap.module.css'
import CN from 'classnames';
import Modal from '../../UI/Modal/Modal';
import OrderSummery from '../OrderSummery/OrderSummery'
import Spinner from '../../UI/Spinner/Spinner';

const Types = ['salad','meat','bacon','cheese'];
const BurgerControl = (props) => {
    let ModalContent = <OrderSummery
                            continuePurchasing={props.continuePurchasing}
                            Types={Types}
                            ingredients={props.ingredients}
                            cancelModal={props.cancelModal}/>;
    if (props.PurchaseSpinner) {
        ModalContent = <Spinner />
    }

    return (
        <>
            <Modal show={props.showPurchaseModal} cancelModal={props.cancelModal}>
                {ModalContent}
            </Modal>
            <div className={CN(classNames.wrapper,bs['text-center'])}>
                <div>Current Price : {props.TotalPrice} $ </div>
                {Types.map((type,i) => {
                    return <ControlType
                                key={i} type={type}
                                removeIngredient={props.removeIngredient}
                                addIngredient={props.addIngredient}
                                ingredients={props.ingredients}/>
                })}
                <div style={{marginTop:'40px'}}>
                <button
                    className={CN(bs.btn,bs['btn-lg'],bs['btn-primary'])}
                    disabled={!props.purchasable}
                    onClick={()=>props.clicked()}>
                {props.isAuthenticated ? "Purchase Now" : "Sign Up First"}</button></div>
            </div>
        </>
    )
}

export default BurgerControl;