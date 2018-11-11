import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BurgerControl from '../../components/Burger/BurgerControl/BurgerControl'
class BurgerBuilder extends Component {
    constructor(props){
        super(props)
        this.state = {
            ingredients:{
                bacon:2,
                salad:1,
                meat:1,
                cheese:2
            }
        };
    }
    render(){
        return(
           <>
            <Burger ingredients={this.state.ingredients}/>
            <BurgerControl />
           </>
        )
    }
}

export default BurgerBuilder;