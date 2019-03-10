import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControl from '../../components/Burger/BurgerControl/BurgerControl';
import axios from '../../axios-orders';
import withErrorHandler from '../../components/Hoc/ErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

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
            purchasable:false,
            showPurchaseModal:false,
            PurchaseSpinner:false
        };
    }
    componentDidMount(){
        axios.get('/ingredients.json')
                .then(response=>{
                    this.setState({ingredients:response.data});
                    this.updatePurchasable(response.data);
                }).catch(error=>{
                    console.log(error)
                })
    }
    updatePurchasable = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients)
            .map(el => updatedIngredients[el])
            .reduce((acc,el) => acc+el,0);
        return sum > 0;
    }
    addIngredient = (type) => {
        const {ingredients} = {...this.state};
        ingredients[type] = this.props.ingredients[type] + 1;
        const TotalPrice = this.props.TotalPrice + INGREDIENTS_PRICES[type];
        this.setState({ingredients,TotalPrice});
        this.updatePurchasable(ingredients);
    }
    removeIngredient = (type) => {
        if(this.props.ingredients[type] <= 0 ){ return; }
        const {ingredients} = {...this.state}
        ingredients[type] = this.props.ingredients[type] - 1;
        const TotalPrice  = this.props.TotalPrice - INGREDIENTS_PRICES[type];
        this.setState({ingredients,TotalPrice});
        this.updatePurchasable(ingredients)
    }

    handleClickPurchase = () => {
        this.setState({showPurchaseModal:true});
    }

    cancelPurchaseModal = () => {
        this.setState({showPurchaseModal:false});
    }

    continuePurchasing = () => {
        this.props.history.push({pathname:'/check-out'});
    }

    render(){
        return(
            <>
                <Burger ingredients={this.props.ingredients}/>
                <BurgerControl
                    showPurchaseModal={this.state.showPurchaseModal}
                    clicked={this.handleClickPurchase}
                    purchasable={this.updatePurchasable(this.props.ingredients)}
                    TotalPrice={this.props.TotalPrice}
                    ingredients={this.props.ingredients}
                    removeIngredient={this.props.onIngredientRemoved}
                    addIngredient={this.props.onIngredientAdded}
                    continuePurchasing={this.continuePurchasing}
                    PurchaseSpinner={this.state.PurchaseSpinner}
                    cancelPurchaseModal={this.cancelPurchaseModal} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients:state.ingredients,
        TotalPrice:state.TotalPrice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded:(ingName) => dispatch({type:actionTypes.ADD_INGREDIENT,ingName}),
        onIngredientRemoved:(ingName) => dispatch({type:actionTypes.REMOVE_INGREDIENT,ingName})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder));
