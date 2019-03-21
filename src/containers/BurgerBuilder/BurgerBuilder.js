import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControl from '../../components/Burger/BurgerControl/BurgerControl';
import withErrorHandler from '../../components/Hoc/ErrorHandler/WithErrorHandler';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class BurgerBuilder extends Component {
    constructor(props){
        super(props)
        this.state = {
            showPurchaseModal:false,
            PurchaseSpinner:false
        };
    }
    componentDidMount(){
        this.props.onInitIngredients();
    }
    updatePurchasable = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients)
            .map(el => updatedIngredients[el])
            .reduce((acc,el) => acc+el,0);
        return sum > 0;
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
        // if(this.props.error) return <h1 style={{ marginTop:'100px' }}>Error Connecting to the server</h1>
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
        ingredients:state.burgerBuilder.ingredients,
        TotalPrice:state.burgerBuilder.TotalPrice,
        error:state.burgerBuilder.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded:(ingName) => dispatch(actionCreators.addIngredient(ingName)),
        onIngredientRemoved:(ingName) => dispatch(actionCreators.removeIngredient(ingName)),
        onInitIngredients:() => dispatch(actionCreators.initIngredients())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder));
