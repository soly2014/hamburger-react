import React, { Component } from "react";
import Classes from "../auth.module.scss";
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import withErrorHandler from '../../../components/Hoc/ErrorHandler/WithErrorHandler';
import axios from '../../../axios-orders';
import ErrorDiv from '../../../components/UI/Error/ErrorDiv';
import { Redirect } from 'react-router-dom';
import { checkValidity } from '../../../shared/utilities';

class LogIn extends Component {
  state = {
      loginForm:{
        email: {
          elementType: 'input',
          elementConfig: {
              type: 'email',
              placeholder: 'Your Email'
          },
          value: '',
          validation:{
            required:true,
            isEmail:true
          },
          touched:false,
          valid:false
        },
        password: {
          elementType: 'input',
          elementConfig: {
              type: 'password',
              placeholder: '******'
          },
          value: '',
          validation:{
            required:true,
            minLength:6
          },
          touched:false,
          valid:false
        }
      },
      formIsValid:false
    };

  handleChangeInput(e,input){
    const updatedLoginForm = {
      ...this.state.loginForm,
      [input]: {
          ...this.state.loginForm[input],
          value: e.target.value,
          valid: checkValidity(e.target.value, this.state.loginForm[input].validation),
          touched: true
      }
    };
    let formIsValid = true;
    for (const input in updatedLoginForm) {
      if (updatedLoginForm.hasOwnProperty(input)) {
        formIsValid = updatedLoginForm[input].valid && formIsValid;
      }
    }
    this.setState({loginForm: updatedLoginForm,formIsValid});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAuth({
          email:this.state.loginForm.email.value,
          password:this.state.loginForm.password.value
    });
  }

  render() {
    let redirectIfAuth = null;
    if (this.props.isAuthenticated) {
      redirectIfAuth =  <Redirect to="/" />
    }

    const inputs = Object.keys(this.state.loginForm).map(type => {
      return <Input
                key={type}
                elementType={this.state.loginForm[type].elementType}
                value={this.state.loginForm[type].value}
                touched={this.state.loginForm[type].touched}
                valid={this.state.loginForm[type].valid}
                elementConfig={this.state.loginForm[type].elementConfig}
                changed={(e)=>this.handleChangeInput(e,type)}/>;
    })
    const errorMessage = this.props.errors.map(error => {
      return <ErrorDiv key={error.message} errorMessage={error.message} />
    });
    const button = this.props.loading ? <Spinner/> : <Button disabled={!this.state.formIsValid} btnType="btn-success">Log In </Button>;
    return (
      <div className={Classes.SignUp}>
          {redirectIfAuth}
          {errorMessage}
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            {inputs}
            <div className={Classes.ConfirmButton}>
                {button}
            </div>
          </form>
      </div>
    )
  }

}

const  mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    errors:state.auth.errors,
    isAuthenticated:state.auth.token !== null
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAuth: (authData) => dispatch(actionCreators.auth({authData,authType:"login"}))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(LogIn,axios));


