import React, { Component } from "react";
import Classes from "./ContactDetails.module.scss";
import bs from "../../../assets/global-styles/bootstrap.module.css";
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import withErrorHandler from '../../../components/Hoc/ErrorHandler/WithErrorHandler';

class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderForm:{
          name: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Your Name'
              },
              value: 'Soliman Mahmoud'
          },
          street: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Street'
              },
              value: ''
          },
          zipCode: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'ZIP Code'
              },
              value: ''
          },
          country: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Country'
              },
              value: ''
          },
          email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: ''
          },
          message: {
            elementType: 'textarea',
            elementConfig: {
                placeholder: 'Your Message Goes here'
            },
            value: 'Your Message Goes here'
          },
          shippingMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ],
                    placeholder: 'Your Option Goes here'
                },
                value: 'fastest'
          }
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const orderDetails = {
      ingredients: this.props.ingredients,
      price: this.props.TotalPrice,
      userId:this.props.userId,
      customer: {
        name: this.state.orderForm.name.value,
        address: {
          street: this.state.orderForm.street.value,
          zipCode: this.state.orderForm.zipCode.value,
          country: this.state.orderForm.country.value
        },
        email: this.state.orderForm.email.value
      },
      shippingMethod: this.state.orderForm.shippingMethod.value
    };
    this.props.onPurchasePurgerStart();
    this.props.onPurchasePurger(orderDetails,this.props.history);

  };

  handleChangeInput (e,inputName){
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
        ...updatedOrderForm[inputName]
    };
    updatedFormElement.value = e.target.value;
    updatedOrderForm[inputName] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});
  }
  render() {
    let Inputs = [];
    for (const input in this.state.orderForm) {
      if (this.state.orderForm.hasOwnProperty(input)) {
        Inputs.push(<Input
                      changed={(e) => this.handleChangeInput(e,input)}
                      key={input}
                      elementType={this.state.orderForm[input].elementType}
                      elementConfig={this.state.orderForm[input].elementConfig }
                      value={this.state.orderForm[input].value}/>);
      }
    }

    let form = (<form onSubmit={e => this.handleSubmit(e)}>
          {Inputs}
          <br />
          <br />
          <button
            type="submit"
            className={[
                bs["btn"],
                bs["btn-primary"],
                Classes.ConfirmButton
              ].join(" ")}>
            Confirm
          </button>
        </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={Classes.ContactDetails}>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPurchasePurger: (orderDetails,history) => dispatch(actionCreators.purchasePurger(orderDetails,history)),
    onPurchasePurgerStart: () => dispatch(actionCreators.purchasePurgerStart())
  }
}

const  mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    TotalPrice: state.burgerBuilder.TotalPrice,
    loading:state.orders.loading,
    userId:state.auth.userId
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactDetails,axios));

