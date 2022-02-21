import axios from "axios";
import { Component } from "react";

const SELLER_API_BASE_URL = "http://localhost:8082/e-auction/api/v1/seller";

class ProductService extends Component{
    getProductList(){
        return axios.get(SELLER_API_BASE_URL + '/productlist');
    }

    getProductById(productId){
        return axios.get(SELLER_API_BASE_URL + '/show-bids/' + productId);
    }
}

export default new ProductService();