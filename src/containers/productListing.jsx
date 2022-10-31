import React, {useEffect} from "react";
import {useSelector} from "react-redux"
import axios from "axios";
import ProductComponent from "./productComponent";

const ProductListing = () =>{
    const products = useSelector((state) => state)

    const fetchProducts = async () =>{
        
    }
    return(
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing