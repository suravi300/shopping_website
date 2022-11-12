import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom"

const ProductComponent = () =>{
    const products = useSelector((state) => state.allProducts.products)

    const renderList = products.map((product)=>{
        const {id, title, category, image, price} = product
        return (
            <div className="ProductDisplay">
                <Link to={`/product/${id}`}>
                    <div className="Image">
                        <div>
                            <img style={{ height: "auto", float: "left", "width": "fit-content%", "object-fit": "cover" }} src={image} alt={title} />
                        </div>
                    </div>
                    <div className="DetailsContainer">
                        <div >{title}</div>
                        <div >${price}</div>
                        <div >{category}</div>
                    </div>
                </Link>
            </div>

        )
    })

    return (
        <React.Fragment>
            <div className="ProductContainer">
                {renderList}
            </div>
        </React.Fragment>
    );
}

export default ProductComponent