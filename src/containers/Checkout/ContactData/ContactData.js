import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    console.log(this.props.price);
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact data</h4>
        <form>
          <input
            className={classes.Input}
            type='text'
            name='name'
            placeholder='Your name'
          ></input>
          <input
            className={classes.Input}
            type='text'
            name='email'
            placeholder='Your email'
          ></input>
          <input
            className={classes.Input}
            type='text'
            name='street'
            placeholder='Your adress'
          ></input>
          <input
            className={classes.Input}
            type='text'
            name='postalCode'
            placeholder='Your postal code'
          ></input>
          <Button btnType='Success' clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
