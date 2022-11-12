import { ActionTypes } from "../constants/actions-types";

const initialState = {
    products:[]
}
export const productReducer = (state = initialState,action) =>{
    var {type, payload} = action
    switch (type){
        case ActionTypes.SET_PRODUCTS :
            return {...state, products: payload}
            break;
        case ActionTypes.FETCH_PRODUCTS :
            return {...state, products: payload}
            break;
        default:
            return state
            break;

    }
}

export const selectedProductReducer = (state = {},action) =>{
    var {type, payload} = action
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
    
        default:
            return state;
    }
}