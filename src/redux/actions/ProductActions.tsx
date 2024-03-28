import { ActionTypes } from "../constans/action-Types";
// import { Product } from "../constans/action-Types"; // Assuming you have defined a Product type

interface SetProductsAction {
  type: any
  payload: Array<any>;
}

interface SelectedProductAction {
  type: any
  payload: any;
}

interface RemoveSelectedProductAction {
  type: any
}

export const setProducts = (products: Array<any>): any => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product: any): any => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (): any => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
