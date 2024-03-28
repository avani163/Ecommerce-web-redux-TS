import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./ProductReduser";
const reducers: any = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
