import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import { Route,Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <Switch>{/* use switch to load the first component that matches */}
              <Route path='/' exact component={BurgerBuilder} />
              <Route path='/check-out' component={Checkout} />
              <Route path='/orders' component={Orders} />
            </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
