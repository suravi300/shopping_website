import { combineReducers } from "redux";
import { productReducer} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  //product: selectedProductsReducer,
});
export default reducers;