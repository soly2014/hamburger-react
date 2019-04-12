import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import SignUp from './containers/Auth/SignUp/signUp';
import LogIn from './containers/Auth/LogIn/login';
import Logout from './containers/Auth/Logout/logout';
import { Route,Switch,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
          <Layout isAuthenticated={this.props.isAuthenticated}>
            <Switch>{/* use switch to load the first component that matches */}
              <Route path='/' exact component={BurgerBuilder} />
              <Route path='/check-out' component={Checkout} />
              <Route path='/orders' component={Orders} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/login' component={LogIn} />
              <Route path='/logout' component={Logout} />
            </Switch>
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

export default withRouter(connect(mapStateToProps)(App));
