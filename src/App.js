import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import SignUp from './containers/Auth/SignUp/signUp';
import LogIn from './containers/Auth/LogIn/login';
import Logout from './containers/Auth/Logout/logout';
import { Route,Switch,Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions/index'

class App extends Component {
  componentDidMount(){
    this.props.onCheckAuth();
  }
  render() {
    let routes = <Switch>{/* use switch to load the first component that matches */}
                  <Route path='/' exact component={BurgerBuilder} />
                  <Route path='/sign-up' component={SignUp} />
                  <Route path='/login' component={LogIn} />
                  <Redirect to="/" />
                </Switch>;
    if (this.props.isAuthenticated) {
      routes = <Switch>{/* use switch to load the first component that matches */}
                <Route path='/' exact component={BurgerBuilder} />
                <Route path='/check-out' component={Checkout} />
                <Route path='/orders' component={Orders} />
                <Route path='/logout' component={Logout} />
                <Redirect to="/" />
              </Switch>;
    }

    return (
      <div>
          <Layout isAuthenticated={this.props.isAuthenticated}>
            {routes}
          </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: (state.auth.token !== null)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuth:() => dispatch(actionTypes.checkAuth())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
