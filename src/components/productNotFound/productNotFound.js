import React, { Component } from 'react';
import AddProductInfo from '../addProductInfo';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './productNotFound.css';

class ProductNotFound extends Component {

  constructor(props) {
    super(props);

    this.code = new URLSearchParams(this.props.location.search).get('code');

    this.state = {
      enteredProduct: this.code
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/product/${this.state.enteredProduct}`);
  }

  onInputChange = (e) => {
    this.setState({
      enteredProduct: e.target.value
    });
  }

  render() {
    return (
    <div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">This Barcode Doesn't Seem To Be In Our Database</h2>
      <p>The barcode: {this.code} gave no results!</p>
      <form onSubmit={this.onSubmit}>
        <p>Try Entering The UPC Number And Try Again</p>
        <input placeholder="e.g. 044000032029" className="textInput" required type="number" onChange={this.onInputChange}/>
        <button className="btn" type="submit">SEARCH</button>
      </form>
      <AddProductInfo />
    </div>)
  }
};

export default withRouter(ProductNotFound);
