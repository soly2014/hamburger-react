import React from 'react';
import classNames from './BurgerControl.module.scss';
import ControlType from './ControlType/ControlType';
import bs from '../../../assets/global-styles/bootstrap.module.css'
import CN from 'classnames';
import Modal from '../../UI/Modal/Modal';
import OrderSummery from '../OrderSummery/OrderSummery'

const Types = ['salad','meat','bacon','cheese'];
const BurgerControl = (props) => (
    <>
				<Modal show={props.showPurchaseModal} cancelPurchaseModal={props.cancelPurchaseModal}>
							<OrderSummery Types={Types} ingredients={props.ingredients} cancelPurchaseModal={props.cancelPurchaseModal}/>
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
              onClick={()=>props.clicked()}
              >Purchase Now</button></div>
        </div>
    </>
)

export default BurgerControl;