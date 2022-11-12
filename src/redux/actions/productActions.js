import storeApi from "../../apis/storeApi"
import { ActionTypes } from "../constants/actions-types"

export const fetchProducts = () => async (dispatch) =>{
        const response = await storeApi.get("/products")
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
}

export const fetchProduct = (id) => async (dispatch) =>{
    const response = await storeApi.get(`/products/${id}`)
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data})
}

export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}