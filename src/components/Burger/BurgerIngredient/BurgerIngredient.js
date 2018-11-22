import React from 'react';
import Classes from './BurgerIngredient.module.scss'

const BurgerIngredient = (props) => {
    let transformedIngredient = null;
    switch (props.type) {
        case 'bacon':
            transformedIngredient = <div className={Classes.bacon}></div>
            break;
        case 'cheese':
            transformedIngredient = <div className={Classes.cheese}></div>
            break;
        case 'meat':
            transformedIngredient = <div className={Classes.meat}></div>
            break;
        case 'salad':
            transformedIngredient = <div className={Classes.salad}></div>
            break;
        default:
            transformedIngredient = null;
    }
    return transformedIngredient;
};

export default BurgerIngredient;

