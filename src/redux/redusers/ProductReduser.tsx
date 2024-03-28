import { ActionTypes } from "../constans/action-Types";
// import { Product } from "../types"; // Assuming you have defined a Product type

interface ProductsState {
  products: any[];
}

interface SelectedProductState {
  [key: string]: any;
}

const initialStateProducts: ProductsState = {
  products: [],
};

const initialStateSelectedProduct: SelectedProductState = {};

export const productsReducer = (
  state: ProductsState = initialStateProducts,
  action: { type: string; payload: any[] }
): ProductsState => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (
  state: SelectedProductState = initialStateSelectedProduct,
  action: { type: string; payload: any }
): SelectedProductState => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

