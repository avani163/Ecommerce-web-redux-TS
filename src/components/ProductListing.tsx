import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store"; // Assuming you have RootState defined in your Redux store
import { setProducts } from "../redux/actions/ProductActions";
import ProductComponent from "./Productcomponent";

const ProductPage: React.FC = () => {
  const products = useSelector((state: any) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log("Err: ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  console.log("Products :", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
