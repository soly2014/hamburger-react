import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import bs from '../../../src/assets/global-styles/bootstrap.module.css';
import Classes from './Checkout.module.scss';
import ContactDetails from './ContactDetails/ContactDetails'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
class Checkout extends Component {

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
            <Burger ingredients={this.props.ingredients}/>
            <div className={[bs['text-center'],Classes.CheckOut].join(' ')}>
              <button onClick={() => this.handleContinue() } className={[bs['btn'],bs['btn-success'],bs['btn-lg'],Classes.btn].join(' ')}>Continue </button>
              <button onClick={() => this.handleCancel() } className={[bs['btn'],bs['btn-danger'],bs['btn-lg']].join(' ')}>Cancel</button>
            </div>
            <Route path={this.props.match.path+'/contact-data'} component={ContactDetails} />
        </div>
      </div>
    )
  }


}

const  mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    TotalPrice: state.TotalPrice
  }
}

export default connect(mapStateToProps)(Checkout)
