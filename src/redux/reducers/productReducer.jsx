import { ActionTypes } from "../constants/actions-types";

const initialState = {
    products:[{
        id: 1,
        title: "SFD",
        category: "programmer"
    }]
}
export const productReducer = (state = initialState,action) =>{
    var {type, payload} = action
    switch (type){
        case ActionTypes.SET_PRODUCTS :
            return state
            break;

        default:
            return state
            break;

    }
}

export default productReducer