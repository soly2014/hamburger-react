import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BurgerControl from '../../components/Burger/BurgerControl/BurgerControl'

const INGREDIENTS_PRICES = {
    bacon:0.7,
    salad:0.3,
    meat:1.5,
    cheese:0.5
};

class BurgerBuilder extends Component {
    constructor(props){
        super(props)
        this.state = {
            ingredients:{
                bacon:0,
                salad:0,
                meat:0,
                cheese:0
            },
            TotalPrice: 4,
            purchasable:false,
            showPurchaseModal:false
        };
    }

    updatePurchasable = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients)
            .map(el => updatedIngredients[el])
            .reduce((acc,el) => acc+el,0);
        this.setState({purchasable:sum > 0})
    }

    addIngredient = (type) => {
        const {ingredients} = {...this.state};
        ingredients[type] = this.state.ingredients[type] + 1;
        const TotalPrice = this.state.TotalPrice + INGREDIENTS_PRICES[type];
        this.setState({ingredients,TotalPrice});
        this.updatePurchasable(ingredients);
    }

    removeIngredient = (type) => {
        if(this.state.ingredients[type] <= 0 ){ return; }
        const {ingredients} = {...this.state}
        ingredients[type] = this.state.ingredients[type] - 1;
        const TotalPrice  = this.state.TotalPrice - INGREDIENTS_PRICES[type];
        this.setState({ingredients,TotalPrice});
        this.updatePurchasable(ingredients)
    }

    handleClickPurchase = () => {
        this.setState({showPurchaseModal:true});
    }

    cancelPurchaseModal = () => {
        this.setState({showPurchaseModal:false});
    }

    render(){
        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControl
                    showPurchaseModal={this.state.showPurchaseModal}
                    clicked={this.handleClickPurchase}
                    purchasable={this.state.purchasable}
                    TotalPrice={this.state.TotalPrice}
                    ingredients={this.state.ingredients}
                    removeIngredient={this.removeIngredient}
                    addIngredient={this.addIngredient}
                    cancelPurchaseModal={this.cancelPurchaseModal} />
            </>
        )
    }
}

export default BurgerBuilder;