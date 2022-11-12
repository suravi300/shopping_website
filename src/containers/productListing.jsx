import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import ProductComponent from "./productComponent";
import {fetchProducts} from "../redux/actions/productActions";

const ProductListing = () =>{
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts());
    }, []);
    console.log("products", products)
    return(
        <div>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing