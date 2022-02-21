import React from "react";
import axios from "axios";
import ProductService from "../Service/ProductService";

export default class OptionList extends React.Component {
  state = {
    options: []
  };

  handleChange = (event) => {
    if(typeof this.props.selectedValueHandler !== 'undefined'){
        this.props.selectedValueHandler(event.target.value);
    }
}

  componentDidMount() {
    ProductService.getProductList().then((res) => {
      const options = res.data;
      this.setState({ options });
  });

  }

  render() {
    const { selectedOption } = this.state;
    return (
                <select class="form-select" value={selectedOption} onChange = {this.handleChange}>
                    <option value="">Select</option>
                    {this.state.options.map(option => <option key={option} value={option.id}>{option.value}</option>)}
                </select>
    );
  }
}
