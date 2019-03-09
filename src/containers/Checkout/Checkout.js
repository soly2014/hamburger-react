import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import bs from '../../../src/assets/global-styles/bootstrap.module.css';
import Classes from './Checkout.module.scss';
import ContactDetails from './ContactDetails/ContactDetails'
import {Route} from 'react-router-dom';

class Checkout extends Component {
  constructor(props){
    super(props)
    this.state = {
        ingredients:{
        meat:0,
        bacon:0,
        salad:0,
        cheese:0
      },
      price:0
    }
  }

  componentDidMount(){
    const params = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for(let param of params.entries()){
      if (param[0] === 'price') {
        this.setState({price:+param[1]})
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ingredients});
  }

  handleContinue = () => {
    this.props.history.replace('/check-out/contact-data');
  }

  handleCancel = () => {
    this.props.history.goBack();
  }
  render(){
    return(
      <div style={{marginTop:'60px'}}>
        <div>
            <Burger ingredients={this.state.ingredients}/>
            <div className={[bs['text-center'],Classes.CheckOut].join(' ')}>
              <button onClick={() => this.handleContinue() } className={[bs['btn'],bs['btn-success'],bs['btn-lg'],Classes.btn].join(' ')}>Continue </button>
              <button onClick={() => this.handleCancel() } className={[bs['btn'],bs['btn-danger'],bs['btn-lg']].join(' ')}>Cancel</button>
            </div>
            <Route path={this.props.match.path+'/contact-data'} render={(props)=> <ContactDetails ingredients={this.state.ingredients} price={this.state.price} {...props} />} />
        </div>
      </div>
    )
  }


}

export default Checkout;