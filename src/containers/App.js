import React, { Component } from 'react';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from '../containers/Checkout/Checkout';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Orders from './Orders/Orders';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
