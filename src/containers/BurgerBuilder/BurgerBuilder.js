import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // This constructor syntax works well too, though
  // we'll use something more modern
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
      </Aux>
    );
  }
}

export default BurgerBuilder;
