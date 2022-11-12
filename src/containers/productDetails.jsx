import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct, fetchProduct } from "../redux/actions/productActions";
import '../../src/styleSheet.css'
//import { Button } from "semantic-ui-react";

const ProductDetails = () =>{
    const product = useSelector((state) => state.product)
    const {id, title, category, image, price, description} = product
    const { productId } = useParams();
    const dispatch = useDispatch();

    console.log(productId);
    // const fetchProductDetail = async () => {
    //     const response = await axios
    //         .get(`https://fakestoreapi.com/products/${productId}`)
    //         .catch(err => {
    //             console.log("Err", err)
    //         });
    //         console.log(selectedProduct(response.data))
    //         dispatch(selectedProduct(response.data));
    // }

    useEffect(()=>{
        if(productId && product !== "") dispatch(fetchProduct(productId));
        return () =>{
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return(
        <div>
            {
            Object.keys(product).length === 0 
            ? <div> ...Loading </div> 
            : <div className="ItemContainer">
                <div className="ItemCard">
                    <div className="Image">
                        <img src={image} alt={title} />
                    </div>
                    
                </div>
                <div>
                        <div className="Title">{title}</div>
                        <div>${price}</div>
                        <div>{category}</div>
                        <p>{description}</p>
                        <div className="Button">
                            <div>Add to cart</div>
                        </div>
                    </div>
                
            </div>
            }
        </div>
    )
}

export default ProductDetails