import React, { Component } from "react";
import ProductService from "../Service/ProductService";
import OptionList from "./option-list";

class ProductBids extends Component{
    constructor(props) {
        super(props)

        this.state = {
                product :{
                    productInfo : {},
                    bidInfo: [],
                selectedValue: ""
            }
        }
    }

    selectedValueHandler = (selectedValue) => {
        this.setState({
            selectedValue
        })
    }

    getProductById(){
        ProductService.getProductById(this.state.selectedValue).then((res) => {
            this.setState({ product: res.data});
        });
    }
    
    render(){
        return(
            <div>
                 <br></br>
                 <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        <p class="text-center">Product</p>
                        </div>
                        <div class="col-sm">
                            <OptionList selectedValueHandler={this.selectedValueHandler}/>
                        </div>
                        <div class="col-sm">
                            <button class="btn btn-outline-success my-2 my-sm-0" onClick={ () => this.getProductById()}>Get</button>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className = "row">
                        <table className = "table table-striped table-bordered" style={{width : "50%"}}>

                            <tbody>
                                <tr>
                                    <th> Product Name </th>
                                    <th> {this.state.product.productInfo.productName} </th>
                                </tr>
                                <tr>
                                    <th> Short Description </th>
                                    <th>  {this.state.product.productInfo.shortDescription} </th>
                                    </tr>
                                <tr>
                                    <th> Detailed description </th>
                                    <th> {this.state.product.productInfo.detailDescription} </th>
                                    </tr>
                                <tr>
                                    <th> Category</th>
                                    <th> {this.state.product.productInfo.category} </th>
                                    </tr>
                                <tr>
                                    <th> Starting Price</th>
                                    <th> {this.state.product.productInfo.startingPrice} </th>
                                    </tr>
                                <tr>
                                    <th> Bid End Date</th>
                                    <th> {this.state.product.productInfo.bidEndDate} </th>
                                </tr>
                            </tbody>
                        </table>

                 </div>
                 <br></br>

                 <h2 className="text-center">Bids</h2>

                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Bid Amount </th>
                                    <th> Name </th>
                                    <th> Email </th>
                                    <th> Mobile</th>
                                </tr>
                            </thead>
                            <tbody>  
                            {
                                    this.state.product.bidInfo.map(
                                        bid => 
                                        <tr>
                                             <td> {bid.bidAmount} </td>
                                             <td> {bid.firstName} {bid.lastName} </td>   
                                             <td> {bid.email}</td>
                                             <td> {bid.phone}</td>
                                        </tr>
                                    )
                                }
                            </tbody> 
                        </table>

                 </div>

            </div>
        )
    }
}

export default ProductBids;

